import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { TwittFormValues } from "@/types/twitt";
import { Edit } from "lucide-react";
type TwittCardProps = {
  data?: TwittFormValues[];
  isLoading: boolean;
};

export default function TwittCard({ data, isLoading }: TwittCardProps) {
  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span className="text-center block mt-4">No twitts found.</span>;
  }

  return (
    <div className="flex flex-col gap-4">
      {data.map((twitt, index) => (
        <Card
          key={index} // بهتره اگر توی twitt یه id داری، از اون استفاده کنی
          className="w-[600px] mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <CardHeader className="flex justify-between items-center p-6">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="text-black leading-none">Username</p>
                <p className="text-gray-600">@username</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">1h</div>
          </CardHeader>

          <CardContent className="p-1">
            <span className="text-base">{twitt.description}</span>
            <Button variant="link" className="flex items-center space-x-1">
              <Edit className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
