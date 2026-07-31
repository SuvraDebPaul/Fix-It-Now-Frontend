import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-24 text-center">
      <XCircle className="h-12 w-12 text-muted-foreground" />
      <h1 className="mt-4 font-display text-2xl">Payment Cancelled</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        No worries — your booking is still there. You can try paying again
        whenever you&apos;re ready.
      </p>
      <Button asChild className="mt-6">
        <Link href="/dashboard/customer/bookings">Back to My Bookings</Link>
      </Button>
    </div>
  );
}
