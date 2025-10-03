import { AxiosInstance } from "../axios";
import type { AxiosError } from "axios";
import type { TwittFormValues } from "@/types/auth";

export const twittCreateService = async (payload: TwittFormValues) => {
  try {
    const { data } = await AxiosInstance.post("/tweet", payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
export const twittListService = async () => {
  try {
    const { data } = await AxiosInstance.get("/tweet");
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
