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
  email?: string;
  firstname?: string;
  lastname?: string;
};

export default function UserAuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { mutate } = useMutation({
    mutationFn: (data: FormValues) => registerService(data),

    onSuccess: (data) => {
      console.log("dd", data);
      const token = data?.token;
      if (!token) return;

      setToken(token);
      navigate({ to: "/" });
    },

    onError: (error: any) => {
      console.log("Local onError triggered:", error);
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
        {/* Username */}
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

        {/* Password */}
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

        {/* Optional Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
          />
        </div>

        {/* Optional Firstname */}
        <div className="grid gap-2">
          <Label htmlFor="firstname">First name </Label>
          <Input id="firstname" type="text" {...register("firstname")} />
        </div>

        {/* Optional Lastname */}
        <div className="grid gap-2">
          <Label htmlFor="lastname">Last name </Label>
          <Input id="lastname" type="text" {...register("lastname")} />
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
