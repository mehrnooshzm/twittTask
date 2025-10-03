import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/header";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header />
      Hello "/home/"!
    </div>
  );
}
