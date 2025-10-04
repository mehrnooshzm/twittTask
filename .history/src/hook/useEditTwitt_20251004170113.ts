import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TwittFormValues, TwittTypes } from "@/types/twitt";
import { twittUpdateService } from "@/services/twitt";
import { TV_TWITT_VIEW } from "@/reactQueryProvider/queryKeys";

type OnOpenChange = (open: boolean) => void;

export function useEditTwitt(
  twitt: TwittTypes,
  onSuccessCallback?: OnOpenChange
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: TwittFormValues) => twittUpdateService(twitt._id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TV_TWITT_VIEW, twitt._id] });
      if (onSuccessCallback) {
        onSuccessCallback(false);
      }
    },
  });

  return mutation;
}
