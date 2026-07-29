"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import { formatDateTime } from "@/lib/format";

interface BookingFormProps {
  technicianName: string;
  price: number;
}

export function BookingForm({ technicianName, price }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [scheduleTime, setScheduleTime] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Matches POST /api/bookings: { serviceId, scheduleTime, address }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-border p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h2 className="font-display text-2xl">Request Sent</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          {technicianName} will review your request for{" "}
          {formatDateTime(scheduleTime)}{" "}
          and confirm or decline shortly. You&apos;ll be notified either way.
        </p>
        <div className="mt-2 flex gap-3">
          <Button asChild>
            <Link href="/dashboard/customer/bookings">View My Bookings</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Browse More Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
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

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-lg border border-border p-6"
      >
        <Field>
          <FieldLabel htmlFor="scheduleTime">
            Preferred Date &amp; Time
          </FieldLabel>
          <Input
            id="scheduleTime"
            type="datetime-local"
            required
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="address">Service Address</FieldLabel>
          <Textarea
            id="address"
            rows={3}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street, city, and any access notes for the technician"
          />
        </Field>
        <Button type="submit" size="lg" className="w-full">
          Confirm Booking — ${price}
        </Button>
      </form>
    </>
  );
}
