import { AxiosInstance } from "../axios";

export const registerService = (payload) => {
  console.log("payload", payload);
  AxiosInstance.post("/auth/register", payload);
};
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
