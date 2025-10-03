import TwittCard from "@/components/twitt/card";
import { useQuery } from "@tanstack/react-query";
import { twittListService } from "@/services/twitt";
import { TL_TWITT_LIST } from "../reactQueryProvider/queryKeys";

export default function TwittList() {
  const { data, isLoading } = useQuery({
    queryKey: [TL_TWITT_LIST],
    queryFn: twittListService,
  });
  return <TwittCard data={data} isLoading={isLoading} />;
}
