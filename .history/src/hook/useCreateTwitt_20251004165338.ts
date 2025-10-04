import { useMutation, useQueryClient } from "@tanstack/react-query";
import { twittCreateService } from "@/services/twitt";

export function useCreateTwitt(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: twittCreateService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["TL_TWITT_LIST"] });
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
  });

  return mutation;
}
