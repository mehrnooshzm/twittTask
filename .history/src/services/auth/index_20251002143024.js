import { AxiosInstance } from "../axios";

export const registerService = async (payload) => {
  try {
    const res = await AxiosInstance.post("/register", payload);
    return res;
  } catch (error) {
    console.log("ddddddd", error);
    throw error;
  }
};
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
