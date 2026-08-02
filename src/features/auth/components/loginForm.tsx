"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../schemas/login.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../api/auth.api";
import { getApiErrorMessage } from "@/lib/utils";

export function LoginForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin();

  const onSubmit: SubmitHandler<LoginFormValues> = (payload) => {
    mutate(payload, {
      onSuccess: async () => {
        toast.success("Logged in successfully.");
        const user = await getCurrentUser();
        queryClient.setQueryData(["currentUser"], user);
        if (user.role === "TECHNICIAN") {
          router.push("/dashboard/technician");
        } else if (user.role === "ADMIN") {
          router.push("/dashboard/admin");
        } else {
          router.push("/");
        }
      },
      onError: (error) => {
        const message = getApiErrorMessage(error, "Invalid email or password.");
        toast.error(message);
        setError("root", { message });
      },
    });
  };

  return (
    <div>
      <Card className="py-8 px-4 bg-transparent text-muted/90">
        <CardHeader>
          <p className="font-mono uppercase text-primary font-bold tracking-widest">
            Welcome Back
          </p>
          <CardTitle className="font-display text-3xl uppercase tracking-wider ">
            Log In to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <FieldDescription className="text-destructive">
                    {errors.email.message}
                  </FieldDescription>
                )}
              </Field>

              {/* Password */}
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="**********"
                  {...register("password")}
                />
                {errors.password && (
                  <FieldDescription className="text-destructive">
                    {errors.password.message}
                  </FieldDescription>
                )}
              </Field>

              {errors.root && (
                <FieldDescription className="text-destructive text-center">
                  {errors.root.message}
                </FieldDescription>
              )}

              {/* Submit */}
              <Field>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Logging in..." : "Log In"}
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <Link href="/register">Register here</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
