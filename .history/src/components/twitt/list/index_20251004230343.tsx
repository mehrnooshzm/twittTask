import TwittCard from "@/components/ui/twittCard";
import { sortedByLatest } from "@/utils/common";
import { useNavigate } from "@tanstack/react-router";
import { routeTwittView } from "@/utils/routePaths";
import { useTwittList } from "@/hook/useTwittList";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function TwittList() {
  const navigate = useNavigate();
  const { data, isLoading } = useTwittList();
  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return (
      <Empty className="border-1 text-shadow-blue-50">
        <EmptyHeader>
          <EmptyTitle>No Twitts Yet</EmptyTitle>
          <EmptyDescription>
            You have not created any twitt yet. Get started by creating your
            first twitt.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
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
