"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { formatDateTime } from "@/lib/format";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useCreateBookings } from "../hooks/useCreateBooking";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookingFormValues, bookingSchema } from "../schemas/booking.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { getApiErrorMessage } from "@/lib/utils";

interface BookingFormProps {
  serviceId: string;
  technicianName: string;
  price: number;
}

export function BookingForm({
  serviceId,
  technicianName,
  price,
}: BookingFormProps) {
  const { data: user, isLoading, isError } = useCurrentUser();
  const {
    mutate,
    isPending,
    isSuccess,
    data: createdBooking,
  } = useCreateBookings();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit: SubmitHandler<BookingFormValues> = (values) => {
    mutate(
      {
        serviceId,
        address: values.address,
        scheduleTime: new Date(values.scheduleTime).toISOString(),
      },
      {
        onSuccess: () => {
          toast.success("Booking request sent!");
        },
        onError: (error) => {
          const message = getApiErrorMessage(
            error,
            "Something went wrong. Please try again.",
          );
          toast.error(message);
        },
      },
    );
  };

  if (isSuccess && createdBooking) {
    return (
      <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-border p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h2 className="font-display text-2xl">Request Sent</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          {technicianName} will review your request for{" "}
          {formatDateTime(createdBooking.scheduleTime)} and confirm or decline
          shortly. You&apos;ll be notified either way.
        </p>
        <div className="mt-2 flex gap-3">
          <Button asChild className="px-6 py-5">
            <Link href="/dashboard/customer/bookings">View My Bookings</Link>
          </Button>
          <Button asChild variant="outline" className="px-6 py-5">
            <Link href="/services">Browse More Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Skeleton className="h-5 w-48" />}
      {!isLoading && (isError || !user) && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p>
            You&apos;ll need to be signed in as a customer to submit this
            request.{" "}
            <Link href="/login" className="font-medium underline">
              Log in
            </Link>{" "}
            or{" "}
            <Link href="/register" className="font-medium underline">
              create an account
            </Link>
            .
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5 rounded-lg border border-border p-6"
      >
        <Field>
          <FieldLabel htmlFor="scheduleTime">
            Preferred Date &amp; Time
          </FieldLabel>
          <Input
            id="scheduleTime"
            type="datetime-local"
            {...register("scheduleTime")}
          />
          {errors.scheduleTime && (
            <FieldDescription className="text-destructive">
              {errors.scheduleTime.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="address">Service Address</FieldLabel>
          <Textarea
            id="address"
            rows={3}
            placeholder="Street, city, and any access notes for the technician"
            {...register("address")}
          />
          {errors.address && (
            <FieldDescription className="text-destructive">
              {errors.address.message}
            </FieldDescription>
          )}
        </Field>
        <Button
          type="submit"
          size="lg"
          className="w-full px-6 py-5"
          disabled={!user || isPending}
        >
          {isPending ? "Sending request..." : `Confirm Booking — $${price}`}
        </Button>
      </form>
    </>
  );
}
