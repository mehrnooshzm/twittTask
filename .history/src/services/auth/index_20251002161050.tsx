import { AxiosInstance } from "../axios";
import type { AxiosError } from "axios";

type AuthPayload = {
  username: string;
  password: string;
  email?: string;
  firstname?: string;
  lastname?: string;
};

export const registerService = async (payload: AuthPayload) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};

export const loginService = async (payload: AuthPayload) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
