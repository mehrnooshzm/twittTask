import { createFileRoute } from "@tanstack/react-router";

import TwittList from "@/components/twitt/list";
import TwittCreate from "@/components/twitt/create";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

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
              <Terminal />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>
          )}
        </div>
        {token && <TwittCreate />}
      </div>
    </div>
  );
}
