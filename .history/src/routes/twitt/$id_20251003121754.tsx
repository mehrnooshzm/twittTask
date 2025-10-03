import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/twitt/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/twitt/"!</div>;
}
