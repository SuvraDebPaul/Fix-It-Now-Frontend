"use client";

import { toast } from "sonner";
import { ClipboardList } from "lucide-react";
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
import { useTechnicianBookings } from "@/features/technicians/hooks/useTechnicianBookings";
import { useUpdateBookingStatus } from "@/features/technicians/hooks/useUpdateBookingStatus";
import type { TechnicianBookingRow } from "@/features/technicians/types/technicians.types";
import { TableRowsSkeleton } from "@/components/dashboard/loading-skeletons";
import { getApiErrorMessage } from "@/lib/utils";

function BookingActions({ booking }: { booking: TechnicianBookingRow }) {
  const { mutate, isPending } = useUpdateBookingStatus();

  function updateStatus(
    status: "ACCEPTED" | "DECLINED" | "IN_PROGRESS" | "COMPLETED",
  ) {
    mutate(
      { id: booking.id, status },
      {
        onSuccess: () => {
          toast.success(`Booking ${status.toLowerCase()}`);
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
  }

  if (booking.status === "REQUESTED") {
    return (
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          disabled={isPending}
          onClick={() => updateStatus("DECLINED")}
        >
          Decline
        </Button>
        <Button
          size="sm"
          disabled={isPending}
          onClick={() => updateStatus("ACCEPTED")}
        >
          Accept
        </Button>
      </div>
    );
  }
  if (booking.status === "PAID") {
    return (
      <div className="flex justify-end">
        <Button
          size="sm"
          disabled={isPending}
          onClick={() => updateStatus("IN_PROGRESS")}
        >
          Start Job
        </Button>
      </div>
    );
  }
  if (booking.status === "IN_PROGRESS") {
    return (
      <div className="flex justify-end">
        <Button
          size="sm"
          disabled={isPending}
          onClick={() => updateStatus("COMPLETED")}
        >
          Mark Completed
        </Button>
      </div>
    );
  }
  if (booking.status === "ACCEPTED") {
    return (
      <span className="text-xs text-muted-foreground">
        Awaiting customer payment
      </span>
    );
  }
  return <span className="text-xs text-muted-foreground">—</span>;
}

export default function TechnicianBookingsPage() {
  const { data: bookings, isLoading, isError } = useTechnicianBookings();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="Bookings"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="Bookings"
          description="Jobs assigned to you, from request to completion."
        />

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SL No.</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Customer</TableHead>
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
                  <TableCell>{booking.customer}</TableCell>
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
                      description="Job requests from customers will show up here."
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
