import { useParams } from "@tanstack/react-router";
import { routeTwittView } from "@/routes/routePaths";
import TwittCard from "@/components/ui/twittCard";
import { twittGetItemService } from "@/services/twitt";
import { useQuery } from "@tanstack/react-query";
import { TV_TWITT_VIEW } from "@/reactQueryProvider/queryKeys";
import TwittEdit from "@/components/twitt/edit";
import { useState } from "react";
export default function TwittView() {
  const [open, setOpen] = useState(false);
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
  const onEditClick = () => {
    setOpen(true);
  };
  return (
    <div className="mt-4">
      <TwittCard twitt={data} showEditButton={true} onEditClick={onEditClick} />
      <TwittEdit
        open={open}
        onOpenChange={setOpen}
        twitt={data}
        key={data._id}
      />
    </div>
  );
}
