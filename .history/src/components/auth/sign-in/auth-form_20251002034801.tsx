import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { LoginService } from "@/services/auth";
type FormValues = {
  username: string;
  password: string;
};

export default function UserAuthForm() {
  const { mutate } = useMutation({
    mutationFn: async (data: FormValues) => {
      console.log("Submitting:", data);
      //   LoginService(data);
      return data;
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <CardContent>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="m@example.com" />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" />
        </div>

        <CardFooter className="flex-col gap-2 mt-4">
          <Button type="submit" className="w-full"></Button>
        </CardFooter>
      </form>
    </CardContent>
  );
}
