import TwittCard from "@/components/ui/twittCard";
import { sortedByLatest } from "@/utils/common";
import { useNavigate } from "@tanstack/react-router";
import { routeTwittView } from "@/utils/routePaths";
import { useTwittList } from "@/hook/useTwittList";
import { Card, CardHeader } from "@/components/ui/card";
export default function TwittList() {
  const navigate = useNavigate();
  const { data, isLoading } = useTwittList();
  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return (
      <Card className="flex items-center justify-center h-40 text-muted-foreground">
        <CardHeader className="text-center p-0">
          <p className="text-lg font-medium">No twitts found.</p>
        </CardHeader>
      </Card>
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
