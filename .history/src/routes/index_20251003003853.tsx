import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/header";
import TwittList from "@/modules/twitt/list";
import TwittCreate from "@/components/twitt/card/create";
import { useQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "../reactQueryProvider/queryKeys";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useQuery({
    queryKey: [TL_TWITT_LIST],
    queryFn: twittListService,
  });
  console.log(data);
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
