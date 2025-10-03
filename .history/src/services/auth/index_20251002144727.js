import { AxiosInstance } from "../axios";

export const registerService = async (payload) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", payload);

    return data;
  } catch (err) {
    console.log("Error during registration:", err);
    throw err;
  }
};
export const loginService = (payload) =>
  AxiosInstance.post("/auth/login", payload);
