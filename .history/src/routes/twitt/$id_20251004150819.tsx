import TwittView from "@/components/twitt/view";
import { createFileRoute } from "@tanstack/react-router";
import { routeTwittView } from "../../utils/routePaths";
export const Route = createFileRoute(routeTwittView)({
  component: RouteComponent,
});

function RouteComponent() {
  return <TwittView />;
}
