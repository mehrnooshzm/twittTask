import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormValues = {
  username: string;
  password: string;
};

export default function UserAuthForm() {
  const [info, setInfo] = useState<FormValues>({ username: "", password: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      // اینجا باید API واقعی login بذاری
      return data;
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data, {
      onSuccess: (successData) => {
        if (successData) setInfo(successData);
      },
      onError: (error) => {
        const err = error as { response?: { data?: unknown } };
        if (err.response?.data) {
          setInfo({ username: "", password: "" });
        }
      },
    });
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
            {...register("username", { required: "This is required." })}
          />
          {errors.username && (
            <span className="text-sm text-red-500">
              {errors.username.message}
            </span>
          )}
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
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "This is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 chars.",
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
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Loading..." : "Log in"}
          </Button>
        </CardFooter>
      </form>
    </CardContent>
  );
}
