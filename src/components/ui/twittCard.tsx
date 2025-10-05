import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { TwittTypes } from "@/types/twitt";
import dayjs from "@/utils/dayjs";
import Moreless from "@/components/ui/moreless";
import { cn } from "@/lib/utils";
import { Edit } from "lucide-react";
type TwittCardProps = {
  twitt: TwittTypes;
  onCardClick?: () => void;
  onEditClick?: () => void;
  showEditButton?: boolean;
};

export default function TwittCard({
  twitt,
  onCardClick,
  showEditButton,
  onEditClick,
}: TwittCardProps) {
  return (
    <Card
      key={twitt?._id}
      className={cn(
        "lg:w-[600px] w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden",
        onCardClick && "cursor-pointer"
      )}
      onClick={onCardClick}
    >
      <CardHeader className="block lg:flex justify-between items-center pr-6 pl-6">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              {twitt.user.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="text-black leading-none">Username</p>
            <p className="text-gray-600">@{twitt.user.username}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {dayjs(twitt.updatedAt).fromNow()}
        </div>
      </CardHeader>

      <CardContent className="pr-6 pl-6">
        <div className="flex justify-between items-start gap-2">
          <Moreless text={twitt.description} />

          {showEditButton && (
            <Edit
              className="h-5 w-5 text-gray-300 hover:text-gray-200 cursor-pointer shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                onEditClick?.();
              }}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
