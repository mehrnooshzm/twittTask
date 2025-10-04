import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { TwittFormValues } from "@/types/twitt";
import dayjs from "@/utils/dayjs";
import Moreless from "@/components/ui/moreless";
import { cn } from "@/lib/utils";
import { Edit } from "lucide-react";
type TwittCardProps = {
  twitt: TwittFormValues;
  onClick?: () => void;
  showEditButton?: boolean;
};

export default function TwittCard({
  twitt,
  onClick,
  showEditButton,
}: TwittCardProps) {
  return (
    <Card
      key={twitt?._id}
      className={cn(
        "w-[600px] mx-auto bg-white rounded-xl shadow-md overflow-hidden",
        onClick && "cursor-pointer"
      )}
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
        <div className="text-base flex">
          <Moreless text={twitt.description} />
          {showEditButton && <Edit className="mr-2 h-7 w-6" />}
        </div>
      </CardContent>
    </Card>
  );
}
