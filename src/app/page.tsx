"use client";
import { RootLayout, RootLayoutMain } from "@/components/layouts/root-layout";
import QuotesList from "@/components/QuotesList";
import { useGetQuotes } from "@/hooks/api/use-get-quotes";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useGetQuotes({ query: null, body: null });

  return (
    <RootLayout>
      {/* Keep the navbar here */}
      <QuotesList
        quotes={data?.quotes || []}
        total={data?.total || 0}
        skip={data?.skip || 0}
        limit={data?.limit || 0}
      />
      <RootLayoutMain>{children}</RootLayoutMain>
    </RootLayout>
  );
}
