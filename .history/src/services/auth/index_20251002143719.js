import { AxiosInstance } from "../axios";

export const registerService = async (payload) => {
  return await AxiosInstance.post("/auth/register", payload);
};

export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
