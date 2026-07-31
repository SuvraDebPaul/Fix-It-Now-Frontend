"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfirmPayment } from "@/features/payments/hooks/useConfirmPayment";

export function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { mutate, isPending, isSuccess, isError } = useConfirmPayment();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (sessionId && !hasStarted.current) {
      hasStarted.current = true;
      mutate(sessionId);
    }
  }, [sessionId, mutate]);

  if (!sessionId) {
    return (
      <>
        <XCircle className="h-12 w-12 text-destructive" />
        <h1 className="mt-4 font-display text-2xl">Missing Payment Session</h1>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          We couldn&apos;t find a payment session in the URL. If you just paid,
          check your bookings page.
        </p>
        <Button asChild className="mt-6">
          <Link href="/dashboard/customer/bookings">Go to My Bookings</Link>
        </Button>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <XCircle className="h-12 w-12 text-destructive" />
        <h1 className="mt-4 font-display text-2xl">
          Couldn&apos;t Confirm Payment
        </h1>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Something went wrong confirming your payment. If money was deducted,
          your booking will update once this is verified — contact support if it
          doesn&apos;t within a few minutes.
        </p>
        <Button asChild className="mt-6">
          <Link href="/dashboard/customer/bookings">Go to My Bookings</Link>
        </Button>
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h1 className="mt-4 font-display text-2xl">Payment Successful</h1>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your payment has been confirmed. The technician will be notified to
          start the job.
        </p>
        <Button asChild className="mt-6">
          <Link href="/dashboard/customer/bookings">View My Bookings</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <h1 className="mt-4 font-display text-2xl">Confirming Your Payment...</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Please wait while we confirm your payment with Stripe.
      </p>
    </>
  );
}
