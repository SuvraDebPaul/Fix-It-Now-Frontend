"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

interface CancelBookingDialogProps {
  bookingId: string;
  service: string;
}

export function CancelBookingDialog({
  bookingId,
  service,
}: CancelBookingDialogProps) {
  const [cancelReason, setCancelReason] = useState("");

  function handleConfirm() {
    // Matches PATCH /api/bookings/:id/cancel: { cancelReason? }
    const payload = { bookingId, cancelReason: cancelReason || undefined };
    console.log("cancel booking payload (not yet wired to backend)", payload);
    toast.success(`Booking for ${service} cancelled`);
    setCancelReason("");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel {service}?</AlertDialogTitle>
          <AlertDialogDescription>
            This can&apos;t be undone. The technician will be notified
            immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Field>
          <FieldLabel htmlFor="cancelReason">
            Reason (optional)
          </FieldLabel>
          <Textarea
            id="cancelReason"
            rows={3}
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            placeholder="Let us know why you're cancelling..."
          />
        </Field>

        <AlertDialogFooter>
          <AlertDialogCancel>Keep Booking</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Confirm Cancellation
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
