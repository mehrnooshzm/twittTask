import { useParams } from "@tanstack/react-router";
import { routeTwitt } from "@/routes/routePaths";
export default function TwittView() {
  const { id } = useParams({ from: routeTwitt });
  return (
    <div>
      <h2>Twitt Detail</h2>
      <p>ID:{id} </p>
    </div>
  );
}
