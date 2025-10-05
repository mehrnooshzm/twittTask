import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthLayout } from "../auth-layout";
import UserAuthForm from "./auth-form";
export function SignIn() {
  return (
    <AuthLayout>
      <Card className="gap-4">
        <CardHeader className="text-center">
          <CardTitle className="text-lg tracking-tight">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
