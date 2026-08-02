"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { getApiErrorMessage } from "@/lib/utils";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useUpdateCustomerProfile } from "@/features/auth/hooks/useUpdateCustomerProfile";
import type { User } from "@/features/auth/types/auth.types";
import { ProfileCardSkeleton } from "@/components/dashboard/loading-skeletons";
import { ProfileCardHeader } from "@/components/dashboard/profile-card-header";

const profileSchema = z.object({
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  area: z.string().min(1, "Area is required"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function ProfileForm({ user }: { user: User }) {
  const { mutate, isPending } = useUpdateCustomerProfile();
  const profile = user.customerProfile!;

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phone: profile.phone ?? "",
      address: profile.address ?? "",
      city: profile.city ?? "",
      area: profile.area ?? "",
    },
  });

  function onSubmit(values: ProfileFormValues) {
    mutate(values, {
      onSuccess: () => {
        toast.success("Profile updated");
      },
      onError: (error) => {
        const message = getApiErrorMessage(
          error,
          "Couldn't update profile. Please try again.",
        );
        toast.error(message);
      },
    });
  }

  return (
    <Card className="max-w-2xl">
      <ProfileCardHeader
        name={user.name}
        email={user.email}
        image={profile.profilePhoto}
      />
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input id="phone" {...form.register("phone")} />
            {form.formState.errors.phone && (
              <p className="text-xs text-destructive">
                {form.formState.errors.phone.message}
              </p>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input id="address" {...form.register("address")} />
            {form.formState.errors.address && (
              <p className="text-xs text-destructive">
                {form.formState.errors.address.message}
              </p>
            )}
          </Field>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" {...form.register("city")} />
              {form.formState.errors.city && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.city.message}
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="area">Area</FieldLabel>
              <Input id="area" {...form.register("area")} />
              {form.formState.errors.area && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.area.message}
                </p>
              )}
            </Field>
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function CustomerProfilePage() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/customer"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Profile"
          description="Your account and contact details."
        />

        {isLoading && <ProfileCardSkeleton />}
        {!isLoading && user?.customerProfile && (
          <ProfileForm key={user.id} user={user} />
        )}
      </div>
    </>
  );
}
