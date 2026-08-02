"use client";

import { ClipboardList } from "lucide-react";
import { toast } from "sonner";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/format";
import { useCreatePayment } from "@/features/payments/hooks/useCreatePayment";
import { CustomerBookingRow } from "@/features/booking/types/bookings.types";
import { CancelBookingDialog } from "@/features/booking/components/cancel-booking-dialog";
import { useMyBookings } from "@/features/booking/hooks/useMyBookings";
import { TableRowsSkeleton } from "@/components/dashboard/loading-skeletons";
import { getApiErrorMessage } from "@/lib/utils";

function PayNowButton({ bookingId }: { bookingId: string }) {
  const { mutate, isPending } = useCreatePayment();

  function handlePay() {
    mutate(bookingId, {
      onSuccess: (payment) => {
        window.location.href = payment.paymentUrl;
      },
      onError: (error) => {
        const message = getApiErrorMessage(
          error,
          "Couldn't start payment. Please try again.",
        );
        toast.error(message);
      },
    });
  }

  return (
    <Button size="sm" onClick={handlePay} disabled={isPending}>
      {isPending ? "Redirecting..." : "Pay Now"}
    </Button>
  );
}

function BookingActions({ booking }: { booking: CustomerBookingRow }) {
  if (booking.status === "ACCEPTED") {
    return (
      <div className="flex justify-end gap-2">
        <CancelBookingDialog bookingId={booking.id} service={booking.service} />
        <PayNowButton bookingId={booking.id} />
      </div>
    );
  }
  if (booking.status === "REQUESTED") {
    return (
      <div className="flex justify-end">
        <CancelBookingDialog bookingId={booking.id} service={booking.service} />
      </div>
    );
  }
  return <span className="text-xs text-muted-foreground">—</span>;
}

export default function CustomerBookingsPage() {
  const { data: bookings, isLoading, isError } = useMyBookings();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/customer"
        rootLabel="Dashboard"
        pageLabel="My Bookings"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="My Bookings"
          description="Every job you've requested, from request to completion."
        />

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SL No.</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Technician</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRowsSkeleton columns={8} />}
              {isError && (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-sm text-destructive"
                  >
                    Couldn&apos;t load bookings. Please refresh.
                  </TableCell>
                </TableRow>
              )}
              {bookings?.map((booking, i) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </TableCell>
                  <TableCell className="font-medium">
                    {booking.service}
                  </TableCell>
                  <TableCell>{booking.technician}</TableCell>
                  <TableCell>{formatDateTime(booking.scheduleTime)}</TableCell>
                  <TableCell className="max-w-48 truncate text-muted-foreground">
                    {booking.address}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    ${booking.totalAmount}
                  </TableCell>
                  <TableCell className="text-right">
                    <BookingActions booking={booking} />
                  </TableCell>
                </TableRow>
              ))}
              {!isLoading && bookings?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8}>
                    <EmptyState
                      icon={ClipboardList}
                      title="No bookings yet"
                      description="Browse services and request your first booking to see it here."
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
