import { useInfiniteQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";

export const useTwittList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [TL_TWITT_LIST],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => twittListService(pageParam),
      getNextPageParam: function (lastPage, allPages, lastPageParam) {
        console.log("lastPage", lastPage);
        if (lastPage.next) {
          return lastPageParam + 1;
        } else {
          return null;
        }
      },

      select: (data) => data.pages.result.flatMap((p) => p),
    });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
