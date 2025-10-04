import { QueryCache, QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
        if (error.response?.status === 401) {
          // handle 401
        }
        if (error.response?.status === 500) {
          // redirect("/500")
        }
      }
    },
  }),
});
