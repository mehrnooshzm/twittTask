import { AxiosInstance } from "../axios";


export const registerService = async (payload: any) => {
  try {
    const res = await AxiosInstance.post("/register", payload);
    return res;
  } catch (error) {
    throw error; 
  }
};
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
