import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { TwittFormValues } from "@/types/twitt";
import { Edit } from "lucide-react";
import dayjs from "@/utils/dayjs";
import { sortedByLatest } from "@/utils/common";
import Moreless from "@/components/ui/moreless";
type TwittCardProps = {
  data: TwittFormValues[];
  isLoading: boolean;
};

export default function TwittCard({ data, isLoading }: TwittCardProps) {
  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span className="text-center block mt-4">No twitts found.</span>;
  }
  const sortedData = sortedByLatest(data, "updatedAt");
  return (
    <div className="flex flex-col gap-4">
      {sortedData.map((twitt) => (
        <Card
          key={twitt?._id}
          className="w-[600px] mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <CardHeader className="flex justify-between items-center pr-6 pl-6">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="text-black leading-none">Username</p>
                <p className="text-gray-600">@{twitt.user}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {dayjs(twitt.updatedAt).fromNow()}
            </div>
          </CardHeader>

          <CardContent className="pr-6 pl-6 flex">
            <span className="text-base">
              <Moreless
                text={twitt.description}
                lines={1}
                length={twitt.description.length}
              />
            </span>
            {/* <Button
              variant="link"
              className="flex items-center pb-3 text-gray-200 "
            >
              <Edit className="w-4 h-4" />
            </Button> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
