import { useParams } from "@tanstack/react-router";
import { routeTwittView } from "@/routes/routePaths";
import TwittCard from "@/components/ui/twittCard";
import { twittGetItemService } from "@/services/twitt";
import { useQuery } from "@tanstack/react-query";
import { TV_TWITT_VIEW } from "@/reactQueryProvider/queryKeys";

export default function TwittView() {
  const { id } = useParams({ from: routeTwittView });

  const { data, isLoading } = useQuery({
    queryKey: [TV_TWITT_VIEW, id],
    queryFn: () => twittGetItemService(id),
  });

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center mt-4">Not Found</div>;
  }

  return <TwittCard twitt={data} />;
}
