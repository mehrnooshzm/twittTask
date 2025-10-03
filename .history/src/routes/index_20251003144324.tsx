import { createFileRoute } from "@tanstack/react-router";

import TwittList from "@/components/twitt/list";
import TwittCreate from "@/components/twitt/create";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className=" mx-auto flex p-4 justify-center gap-4">
        <div className="pl-10">
          <TwittList />
        </div>
        <TwittCreate />
      </div>
    </div>
  );
}
