import { AxiosInstance } from "../axios";

export const registerService = async (payload) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", payload);

    return data;
  } catch (err) {
    throw err;
  }
};

export const loginService = async (payload) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", payload);

    return data;
  } catch (err) {
    throw err;
  }
};
