import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { TwittFormValues } from "@/types/twitt";
import dayjs from "@/utils/dayjs";
import Moreless from "@/components/ui/moreless";
type TwittCardProps = {
  twitt: TwittFormValues;
  onClick?: () => void;
};

export default function TwittCard({ twitt, onClick }: TwittCardProps) {
  return (
    <Card
      key={twitt?._id}
      className="w-[600px] mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      onClick={onClick}
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
          <Moreless text={twitt.description} />
        </span>
      </CardContent>
    </Card>
  );
}
