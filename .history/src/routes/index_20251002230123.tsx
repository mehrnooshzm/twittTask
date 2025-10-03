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
      <div className="max-w-2xl mx-auto">
        <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
          Button
        </Button>
        <TwittList />
      </div>
    </div>
  );
}
