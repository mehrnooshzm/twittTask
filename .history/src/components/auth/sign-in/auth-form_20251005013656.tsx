import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginService } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

import type { LoginResponse, LoginFormValues } from "@/types/auth";

export default function UserAuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const { mutate } = useMutation<LoginResponse, Error, LoginFormValues>({
    mutationFn: (data: LoginFormValues) => {
      return loginService(data);
    },
    onSuccess: (data) => {
      const token = data?.token;
      if (!token) return;

      setToken(token);
      navigate({ to: "/" });
    },
  });

  const onSubmit = (data: LoginFormValues) => {
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
          <Label htmlFor="username">Password</Label>
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
            {isSubmitting ? "isSubmitting..." : "Log in"}
          </Button>
        </CardFooter>
      </form>
    </CardContent>
  );
}
