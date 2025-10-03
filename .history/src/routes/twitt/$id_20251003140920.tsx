import TwittView from "@/components/twitt/view";
import { createFileRoute } from "@tanstack/react-router";

export const TwitteViewRoute = createFileRoute("/twitt/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TwittView />;
}
