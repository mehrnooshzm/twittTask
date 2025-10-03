import { AxiosInstance } from "../axios";

export const registerService = async (payload) => {
  try {
    const res = await AxiosInstance.post("/auth/register", payload);
    return res;
  } catch (error) {
    throw error;
  }
};
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
