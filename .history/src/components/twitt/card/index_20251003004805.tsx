import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { TwittFormValues } from "@/types/twitt";

export default function TwittCard({
  data,
  isLoading,
}: {
  data?: TwittFormValues;
  isLoading: boolean;
}) {
  return (
    data &&
    !isLoading &&
    data.map((twitt) => (
      <Card className="w-[600px] mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
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
        <CardContent className="p-6">
          <p className="text-base">{twitt.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6">
          <div className="flex space-x-4">
            <Button variant="link">
              <span className="ml-1">Edit</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    ))
  );
}
