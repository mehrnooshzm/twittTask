import { AxiosError } from "axios";
import { toast } from "sonner";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (failureCount >= 0) return false;

        return !(
          error instanceof AxiosError &&
          [401, 403].includes(error.response?.status ?? 0)
        );
      },
      refetchOnWindowFocus: false,
      staleTime: 10 * 1000,
    },
    mutations: {
      onError: (error: unknown) => {
        let message = "Something went wrong!";
        if (error instanceof AxiosError) {
          message = error.response?.data?.message || error.message;
        } else if (error instanceof Error) {
          message = error.message;
        }
        toast.error(message, {
          style: {
            "--normal-bg": "red",
            "--normal-text": "white",
            "--normal-border": "red",
          } as React.CSSProperties,
        });
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) {
          toast.error("Session expired!");
          Cookies.remove("token");
        }
        if (error.response?.status === 500) {
          toast.error("Internal Server Error!");
        }
      }
    },
  }),
});
