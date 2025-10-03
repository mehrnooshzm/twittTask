import { AxiosInstance } from "../axios";
console.log("AxiosInstance", AxiosInstance);
export const RegisterService = (payload) =>
  AxiosInstance.post("/auth/register", payload);
export const LoginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
