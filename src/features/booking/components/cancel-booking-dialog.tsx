"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
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
import { useCancelBookings } from "../hooks/useCancelBooking";

interface CancelBookingDialogProps {
  bookingId: string;
  service: string;
}

export function CancelBookingDialog({
  bookingId,
  service,
}: CancelBookingDialogProps) {
  const [cancelReason, setCancelReason] = useState("");
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCancelBookings();

  function handleConfirm() {
    mutate(
      { id: bookingId, cancelReason: cancelReason || "" },
      {
        onSuccess: () => {
          toast.success(`Booking for ${service} cancled`);
          setCancelReason("");
          setOpen(false);
        },
        onError: (error) => {
          const message =
            error.response?.data?.message ??
            "Couldn't cancel this booking. Please try again";
          toast.error(message);
        },
      },
    );
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
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
          <FieldLabel htmlFor="cancelReason">Reason (optional)</FieldLabel>
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
          <Button onClick={handleConfirm} disabled={isPending}>
            {isPending ? "Cancelling..." : "Confirm Cancellation"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
