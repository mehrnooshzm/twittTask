import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerService } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

type FormValues = {
  username: string;
  password: string;
};

export default function UserAuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const { mutate } = useMutation({
    mutationFn: async (data: FormValues) => {
      console.log("22");
      const response = await registerService(data);
      return response;
    },
    onSuccess: ({ data }) => {
      const token = data?.token;
      if (!token) return;

      setToken(token);
      navigate({ to: "/" });
    },
  });

  const navigate = useNavigate();
  const { setToken } = useAuth();

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="m@example.com"
            {...register("username", {
              required: "name is required",
              minLength: {
                value: 3,
                message: "username must be at least 3 characters",
              },
            })}
          />
          {errors.username && (
            <span className="text-sm text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <CardFooter className="flex-col gap-2 mt-4">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "isSubmitting..." : "Sign up"}
          </Button>
        </CardFooter>
      </form>
    </CardContent>
  );
}
