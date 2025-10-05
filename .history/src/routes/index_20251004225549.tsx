import { createFileRoute } from "@tanstack/react-router";

import TwittList from "@/components/twitt/list";
import TwittCreate from "@/components/twitt/create";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { token } = useAuth();
  return (
    <div>
      <div className=" mx-auto flex p-4 justify-center gap-4">
        <div className="pl-10">
          {token ? (
            <TwittList />
          ) : (
            <Alert variant="default">
              <AlertDescription>
                Please sign in to view and create twitts.
              </AlertDescription>
            </Alert>
          )}
        </div>
        {token && <TwittCreate />}
      </div>
    </div>
  );
}
