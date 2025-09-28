import { getQuotes, getQuotesUrl } from "@/services/get-quotes.ts/get-quotes";
import { ApiGetQuotesReq } from "@/types/api/get-quotes/get-quotes";
import { useQuery } from "@tanstack/react-query";

export const useGetQuotes = (props: ApiGetQuotesReq) => {
  return useQuery({
    queryKey: [getQuotesUrl],
    queryFn: () => getQuotes(props),
  });
};
