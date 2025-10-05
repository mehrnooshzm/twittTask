import { useInfiniteQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";

export const useTwittList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [TL_TWITT_LIST],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => twittListService(pageParam),
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        const pageSize = lastPage.list.length;
        const total = lastPage.total;
        const nextPage =
          lastPageParam * pageSize < total ? lastPageParam + 1 : undefined;
        return nextPage;
      },
    });
  const flatData = data?.pages.flatMap((p) => p.list) ?? [];
  return {
    data: flatData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
