import { BaseApiRequest } from "../base-api-request";
import { GetQuotesResponse } from "./index.";

export type ApiGetQuotesReq = BaseApiRequest<null, null>;

export type ApiGetQuotesRes = GetQuotesResponse;
