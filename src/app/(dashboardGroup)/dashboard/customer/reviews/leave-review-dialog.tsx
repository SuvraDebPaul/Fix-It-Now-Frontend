"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useCreateReview } from "@/features/booking/hooks/useCreateReview";

interface LeaveReviewDialogProps {
  bookingId: string;
  service: string;
  technician: string;
}

export function LeaveReviewDialog({
  bookingId,
  service,
  technician,
}: LeaveReviewDialogProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const { mutate, isPending } = useCreateReview();

  function handleSubmit() {
    mutate(
      { bookingId, rating, comment: comment || undefined },
      {
        onSuccess: () => {
          toast.success(`Review submitted for ${technician}`);
          setOpen(false);
          setRating(0);
          setComment("");
        },
        onError: (error) => {
          const message =
            error.response?.data?.message ??
            "Couldn't submit your review. Please try again.";
          toast.error(message);
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Leave Review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rate {service}</DialogTitle>
          <DialogDescription>
            Your review for {technician} helps other customers book with
            confidence.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Field>
            <FieldLabel>Rating</FieldLabel>
            <div className="flex gap-1" onMouseLeave={() => setHoverRating(0)}>
              {Array.from({ length: 5 }).map((_, i) => {
                const value = i + 1;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHoverRating(value)}
                    aria-label={`${value} star${value > 1 ? "s" : ""}`}
                  >
                    <Star
                      className="h-7 w-7 text-primary"
                      fill={
                        value <= (hoverRating || rating)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                );
              })}
            </div>
          </Field>

          <Field>
            <FieldLabel htmlFor="comment">Comment</FieldLabel>
            <Textarea
              id="comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="How did the job go?"
            />
          </Field>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={rating === 0 || isPending}>
            {isPending ? "Submitting..." : "Submit Review"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
