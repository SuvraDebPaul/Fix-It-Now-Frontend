import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { PaymentSuccessContent } from "../../../features/payments/components/payment-success-content";

export default function PaymentSuccessPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-24 text-center">
      <Suspense
        fallback={<Loader2 className="h-12 w-12 animate-spin text-primary" />}
      >
        <PaymentSuccessContent />
      </Suspense>
    </div>
  );
}
