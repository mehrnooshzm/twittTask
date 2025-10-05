import { createFileRoute } from "@tanstack/react-router";

import TwittList from "@/components/twitt/list";
import TwittCreate from "@/components/twitt/create";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { token } = useAuth();
  return (
    <div>
      <div className=" mx-auto flex  flex-col-reverse lg:flex-row  p-4 justify-center gap-4">
        <div className="lg:pl-10">
          {token ? (
            <TwittList />
          ) : (
            <>
              <Avatar>
                <AvatarImage
                  className="w-50 h-50 object-cover rounded-full mx-auto"
                  src="https://feministeconomics.org/wp-content/uploads/2022/12/Twitter-Symbol-1024x576.png"
                />
              </Avatar>
              Please sign in to view and create twitts.
            </>
          )}
        </div>
        {token && <TwittCreate />}
      </div>
    </div>
  );
}
