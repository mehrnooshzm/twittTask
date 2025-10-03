import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TwittCard() {
  return (
    <Card className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
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
        <p className="text-base">
          This is a tweet. It's a short, bursty statement or question that's
          under the maximum character limit.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6">
        <div className="flex space-x-4">
          <Button variant="link">
            <span className="ml-1">Reply</span>
          </Button>
          <Button variant="link">
            <span className="ml-1">Retweet</span>
          </Button>
          <Button variant="link">
            <span className="ml-1">Like</span>
          </Button>
          <Button variant="link">
            <span className="ml-1">Upload</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
