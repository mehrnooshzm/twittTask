import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/header";
import TwittList from "@/modules/twitt/list";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto flex flex-row  p-4">
        {" "}
        <TwittList />
        <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
          Add Twitt
        </Button>
      </div>
    </div>
  );
}
