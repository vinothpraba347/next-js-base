import axios, { AxiosInstance } from "axios";
import { apiConfig } from "./api";

export const axiosDummyJson: AxiosInstance = axios.create({
  baseURL: apiConfig.publicInstanceCode,
});
