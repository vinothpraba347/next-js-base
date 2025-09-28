import React from "react";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesProps {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

const QuotesList: React.FC<QuotesProps> = ({ quotes, total, skip, limit }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            {/* <MessageSquareQuote className="w-8 h-8 text-white" /> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Inspiring Quotes
          </h1>
          <p className="text-gray-600 text-lg">
            Discover wisdom from great minds • {total} quotes available
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="space-y-6 mb-12">
          {quotes.map(({ id, quote, author }, index) => (
            <div
              key={id}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

              <div className="p-8">
                {/* Quote Icon */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mt-1">
                    {/* <MessageSquareQuote className="w-4 h-4 text-blue-600" /> */}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Quote Text */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                      {quote}
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        {/* <User className="w-5 h-5 text-gray-600" /> */}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{author}</p>
                        <p className="text-sm text-gray-500">
                          Quote #{skip + index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Pagination Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 font-medium">
                Showing {skip + 1}–{skip + quotes.length} of {total} quotes
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                Page {Math.floor(skip / limit) + 1}
              </div>
              <span className="text-gray-400">of</span>
              <div className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                {isNaN(Math.ceil(total / limit)) ? 0 : Math.ceil(total / limit)}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${((skip + quotes.length) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesList;
