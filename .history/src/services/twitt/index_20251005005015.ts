import { AxiosInstance } from "../axios";
import type { AxiosError } from "axios";
import type { TwittFormValues } from "@/types/twitt";

export const twittCreateService = async (payload: TwittFormValues) => {
  try {
    const { data } = await AxiosInstance.post("/tweet", payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
export const twittUpdateService = async (
  id: string,
  payload: TwittFormValues
) => {
  try {
    const { data } = await AxiosInstance.put(`/tweet/${id}`, payload);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
export const twittListService = async (pageParam: number) => {
  try {
    const { data } = await AxiosInstance.get("/tweet", {
      params: {
        skip: pageParam - 1,
        limit: 5,
      },
    });
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
export const twittGetItemService = async (id: string) => {
  try {
    const { data } = await AxiosInstance.get(`/tweet/${id}`);
    return data;
  } catch (err) {
    throw err as AxiosError;
  }
};
