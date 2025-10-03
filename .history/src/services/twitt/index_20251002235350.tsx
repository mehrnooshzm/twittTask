import { AxiosInstance } from "../axios";
import type { AxiosError } from "axios";
import type { LoginFormValues, RegisterFormValues } from "@/types/auth";

export const twittCreateService = async (payload: RegisterFormValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};

export const loginService = async (payload: LoginFormValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
