import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
export default function UserAuthForm() {
  type FormValues = {
    username: string;
    password: string;
  };
  const [info, setInfo] = useState<FormValues>({ username: "", password: "" });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      // Replace with your actual API call, e.g.:
      // return await api.login(data);
      return data;
    },
  });

  const registerHandler = (data: FormValues) => {
    mutate(data, {
      onSuccess: (successData) => {
        if (successData) setInfo(successData);
      },
      onError: (error) => {
        // If using Axios, error may be of type AxiosError
        const err = error as { response?: { data?: unknown; status?: number } };
        if (err.response?.data)
          setInfo({
            username: "",
            password: "",
          });
        // Optionally, handle error info elsewhere or show a message
      },
      onSettled: () => {},
    });
  };
  return (
    <>
      <CardContent>
        <form onSubmit={handleSubmit(registerHandler)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="m@example.com"
                required
                {...register("username", { required: "This is required." })}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                {...register("password", {
                  required: "This is required.",
                  minLength: {
                    value: 6,
                    message: "This input exceed maxLength.",
                  },
                })}
                id="password"
                type="password"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 mt-4">
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "loading..." : "Log in"}
        </Button>
      </CardFooter>
    </>
  );
}
