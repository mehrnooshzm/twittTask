import { useQuery } from "@tanstack/react-query";
import { twittGetItemService } from "@/services/twitt";
import { TV_TWITT_VIEW } from "@/reactQueryProvider/queryKeys";

export function useTwittItem(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: [TV_TWITT_VIEW, id],
    queryFn: () => twittGetItemService(id),
    enabled: !!id,
  });

  return { data, isLoading };
}
