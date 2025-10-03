import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/header";
import TwittList from "@/modules/twitt/list";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header />
      <TwittList />
    </div>
  );
}
