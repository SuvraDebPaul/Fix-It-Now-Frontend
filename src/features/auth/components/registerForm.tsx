"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { RegisterFormValues, registerSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRegister } from "../hooks/useRegister";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/utils";

export function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "CUSTOMER" },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate, isPending } = useRegister();

  const onSubmit: SubmitHandler<RegisterFormValues> = ({
    confirmPassword,
    ...payload
  }) => {
    mutate(payload, {
      onSuccess: () => {
        toast.success("Account created — please log in");
        router.push("/login?registered=1");
      },
      onError: (error) => {
        const message = getApiErrorMessage(
          error,
          "Something went wrong. Please try again.",
        );
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
            Join FixItNow
          </p>
          <CardTitle className="font-display text-3xl uppercase tracking-wider">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Customer & Technician Role */}
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="w-fit flex gap-8"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="CUSTOMER" id="customer" />
                      <Label htmlFor="customer">Customer</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="TECHNICIAN" id="technician" />
                      <Label htmlFor="technician">Technician</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.role && (
                <FieldDescription className="text-destructive">
                  {errors.role.message}
                </FieldDescription>
              )}

              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Full name is required",
                  })}
                />
                {errors.name && (
                  <FieldDescription className="text-destructive">
                    {errors.name.message}
                  </FieldDescription>
                )}
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
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
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    {...register("password")}
                  />
                  <Button
                    variant={"link"}
                    size={"icon-lg"}
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-background"
                    tabIndex={-1}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {errors.password ? (
                  <FieldDescription className="text-destructive">
                    {errors.password.message}
                  </FieldDescription>
                ) : (
                  <FieldDescription>
                    Must be at least 8 characters long.
                  </FieldDescription>
                )}
              </Field>

              {/* Confirm Password */}
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="**********"
                    {...register("confirmPassword")}
                  />

                  <Button
                    variant={"link"}
                    size={"icon-lg"}
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-background"
                    tabIndex={-1}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {errors.confirmPassword && (
                  <FieldDescription className="text-destructive">
                    {errors.confirmPassword.message}
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
                  {isPending ? "Creating account..." : "Create Account"}
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Already have an account? <Link href="/login">Sign in</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
