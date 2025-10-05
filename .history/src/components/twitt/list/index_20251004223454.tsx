import TwittCard from "@/components/ui/twittCard";
import { sortedByLatest } from "@/utils/common";
import { useNavigate } from "@tanstack/react-router";
import { routeTwittView } from "@/utils/routePaths";
import { useTwittList } from "@/hook/useTwittList";
import { CardHeader } from "@/components/ui/card";
export default function TwittList() {
  const navigate = useNavigate();
  const { data, isLoading } = useTwittList();
  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return (
      <CardHeader className="flex justify-between items-center pr-6 pl-6">
        No twitts found.
      </CardHeader>
    );
  }
  const sortedData = sortedByLatest(data, "updatedAt");
  const goToTwittDetail = (id: string) => {
    navigate({ to: routeTwittView, params: { id } });
  };
  return (
    <div className="flex flex-col gap-4">
      {sortedData.map((twitt) => (
        <TwittCard
          twitt={twitt}
          onCardClick={() => goToTwittDetail(twitt?._id)}
          key={twitt._id}
        />
      ))}
    </div>
  );
}
