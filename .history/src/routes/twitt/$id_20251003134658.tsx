import { createFileRoute } from "@tanstack/react-router";
import TwittView from "@/components/twitt/view";
export const Route = createFileRoute("/twitt/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TwittView />;
}
