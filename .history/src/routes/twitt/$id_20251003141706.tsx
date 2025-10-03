import TwittView from "@/components/twitt/view";
import { createFileRoute } from "@tanstack/react-router";
import { routeTwitt } from "../routePaths";
export const Route = createFileRoute(routeTwitt)({
  component: RouteComponent,
});

function RouteComponent() {
  return <TwittView />;
}
