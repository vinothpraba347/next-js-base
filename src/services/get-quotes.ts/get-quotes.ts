import { axiosDummyJson } from "@/config/axios";
import {
  ApiGetQuotesReq,
  ApiGetQuotesRes,
} from "@/types/api/get-quotes/get-quotes";

export const getQuotesUrl = "/quotes";

export const getQuotes = async ({ query }: ApiGetQuotesReq) => {
  const response = await axiosDummyJson.get<ApiGetQuotesRes>(getQuotesUrl, {
    params: query,
  });
  return response.data;
};
