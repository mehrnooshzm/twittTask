import TwittCard from "@/components/ui/twittCard";
import type { TwittFormValues } from "@/types/twitt";
import { sortedByLatest } from "@/utils/common";
type TwittCardProps = {
  data: TwittFormValues[];
  isLoading: boolean;
};

export default function TwittList({ data, isLoading }: TwittCardProps) {
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
        <TwittCard key={twitt._id} twitt={twitt} />
      ))}
    </div>
  );
}
