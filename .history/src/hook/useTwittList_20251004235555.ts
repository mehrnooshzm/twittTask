import { useInfiniteQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";
import type { TwittTypes } from "@/types/twitt";

export const useTwittList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [TL_TWITT_LIST],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => twittListService(pageParam),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
    });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
