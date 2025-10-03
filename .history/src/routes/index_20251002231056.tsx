import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/header";
import TwittList from "@/modules/twitt/list";
import TwittCreate from "@/components/twitt/card/create";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto flex flex-row  p-4">
        <TwittList />
        <TwittCreate />
      </div>
    </div>
  );
}
