import { useParams } from "@tanstack/react-router";
import { routeTwittView } from "@/utils/routePaths";
import TwittCard from "@/components/ui/twittCard";
import TwittEdit from "@/components/twitt/edit";
import { useState } from "react";
import { useRedirectIfNotLoggedIn } from "@/hook/useRedirectIfNotLoggedIn";
import { useTwittItem } from "@/hook/useViewTwitt";
export default function TwittView() {
  useRedirectIfNotLoggedIn();
  const [open, setOpen] = useState(false);
  const { id } = useParams({ from: routeTwittView });
  const { data, isLoading } = useTwittItem(id);

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
      <TwittEdit open={open} onOpenChange={setOpen} twitt={data} />
    </div>
  );
}
