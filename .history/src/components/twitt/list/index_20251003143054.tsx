import TwittCard from "@/components/ui/twittCard";
import { sortedByLatest } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";

export default function TwittList() {
  const { data, isLoading } = useQuery({
    queryKey: [TL_TWITT_LIST],
    queryFn: twittListService,
  });
  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span className="text-center block mt-4">No twitts found.</span>;
  }
  const sortedData = sortedByLatest(data, "updatedAt");
  return (
    <div className="flex flex-col gap-4">
      {sortedData.map((twitt) => (
        <TwittCard twitt={twitt} />
      ))}
    </div>
  );
}
