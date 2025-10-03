import { AxiosInstance } from "../axios";

export const registerService = (payload) =>
  AxiosInstance.post("/auth/register", payload);
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
