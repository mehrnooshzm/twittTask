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
      <div className=" mx-auto flex p-4 justify-center gap-4">
        <div className="pl-10">
          <TwittList />
        </div>
        <TwittCreate />
      </div>
    </div>
  );
}
