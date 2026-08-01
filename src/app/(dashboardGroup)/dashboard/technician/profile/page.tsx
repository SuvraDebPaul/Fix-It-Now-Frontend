"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { getInitials } from "@/lib/utils";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useUpdateTechnicianProfile } from "@/features/technicians/hooks/useUpdateTechnicianProfile";
import type { User } from "@/features/auth/types/auth.types";

const profileSchema = z.object({
  phone: z.string().min(1, "Phone is required"),
  hourlyRate: z.number().positive("Must be greater than 0"),
  experience: z.number().min(0, "Can't be negative"),
  location: z.string().min(1, "Location is required"),
  bio: z.string().min(1, "Bio is required"),
  isAvailable: z.boolean(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function ProfileForm({ user }: { user: User }) {
  const { mutate, isPending } = useUpdateTechnicianProfile();
  const profile = user.technicianProfile!;

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phone: profile.phone,
      hourlyRate: profile.hourlyRate,
      experience: profile.experience,
      location: profile.location,
      bio: profile.bio,
      isAvailable: profile.isAvailable,
    },
  });

  function onSubmit(values: ProfileFormValues) {
    mutate(values, {
      onSuccess: () => {
        toast.success("Profile updated");
      },
      onError: (error) => {
        const message =
          error.response?.data?.message ??
          "Couldn't update profile. Please try again.";
        toast.error(message);
      },
    });
  }

  return (
    <Card className="max-w-2xl">
      <CardHeader className="flex-row items-center gap-4">
        <UserAvatar
          name={user.name}
          image={profile.profilePhoto ?? undefined}
          fallback={getInitials(user.name)}
          className="h-16 w-16"
          fallbackClassName="bg-primary/20 text-lg text-primary"
        />
        <div>
          <CardTitle>{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <FieldLabel htmlFor="hourlyRate">Hourly Rate</FieldLabel>
              <Input
                id="hourlyRate"
                type="number"
                step="0.01"
                {...form.register("hourlyRate", { valueAsNumber: true })}
              />
              {form.formState.errors.hourlyRate && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.hourlyRate.message}
                </p>
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="experience">Experience (years)</FieldLabel>
              <Input
                id="experience"
                type="number"
                {...form.register("experience", { valueAsNumber: true })}
              />
              {form.formState.errors.experience && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.experience.message}
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input id="location" {...form.register("location")} />
              {form.formState.errors.location && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.location.message}
                </p>
              )}
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="bio">Bio</FieldLabel>
            <Textarea id="bio" rows={4} {...form.register("bio")} />
            {form.formState.errors.bio && (
              <p className="text-xs text-destructive">
                {form.formState.errors.bio.message}
              </p>
            )}
          </Field>
          <div className="flex items-center gap-3 rounded-lg border p-4">
            <Controller
              control={form.control}
              name="isAvailable"
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <div>
              <p className="text-sm font-medium">Available for bookings</p>
              <p className="text-xs text-muted-foreground">
                Turn off if you&apos;re fully booked or on leave.
              </p>
            </div>
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function TechnicianProfilePage() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Profile"
          description="How customers see you when browsing technicians."
        />

        {isLoading && (
          <p className="text-sm text-muted-foreground">Loading...</p>
        )}
        {!isLoading && user?.technicianProfile && (
          <ProfileForm key={user.id} user={user} />
        )}
      </div>
    </>
  );
}
