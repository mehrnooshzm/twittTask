import { AxiosInstance } from "../axios";
import axios from "axios";
export const registerService = async (payload) => {
  const res = await axios.post("http://localhost:3000/auth/register", payload);
  return res.data;
};
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
