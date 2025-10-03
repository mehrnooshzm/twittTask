import { useParams } from "@tanstack/react-router";
import { routeTwittView } from "@/routes/routePaths";
export default function TwittView() {
  const { id } = useParams({ from: routeTwittView });
  return (
    <div>
      <h2>Twitt Detail</h2>
      <p>ID:{id} </p>
    </div>
  );
}
