import { useInfiniteQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";

export const useTwittList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [TL_TWITT_LIST],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => twittListService(pageParam),
      getNextPageParam: (lastPage, allPages) => {
        const loadedItems = allPages.flatMap((p) => p.list).length;
        return loadedItems < lastPage.total ? allPages.length + 1 : undefined;
      },

      select: (data) => data.pages.flatMap((p) => p.list),
    });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
