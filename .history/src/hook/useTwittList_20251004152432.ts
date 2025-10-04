import { useQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";
import type { TwittTypes } from "@/types/twitt";

export const useTwittList = () => {
  const { data, isLoading } = useQuery<TwittTypes[]>({
    queryKey: [TL_TWITT_LIST],
    queryFn: twittListService,
  });

  return {
    data,
    isLoading,
  };
};
