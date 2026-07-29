import { ClipboardList } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
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
import { customerBookings } from "../data";
import { CancelBookingDialog } from "./cancel-booking-dialog";

function BookingActions({
  bookingId,
  service,
  status,
}: {
  bookingId: string;
  service: string;
  status: string;
}) {
  if (status === "ACCEPTED") {
    return (
      <div className="flex justify-end gap-2">
        <CancelBookingDialog bookingId={bookingId} service={service} />
        <Button size="sm">Pay Now</Button>
      </div>
    );
  }
  if (status === "REQUESTED") {
    return (
      <div className="flex justify-end">
        <CancelBookingDialog bookingId={bookingId} service={service} />
      </div>
    );
  }
  return <span className="text-xs text-muted-foreground">—</span>;
}

export default function CustomerBookingsPage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/customer"
        rootLabel="Dashboard"
        pageLabel="My Bookings"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <div>
          <h1 className="text-2xl font-semibold">My Bookings</h1>
          <p className="text-sm text-muted-foreground">
            Every job you&apos;ve requested, from request to completion.
          </p>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
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
              {customerBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {booking.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {booking.service}
                  </TableCell>
                  <TableCell>{booking.technician}</TableCell>
                  <TableCell>
                    {new Date(booking.scheduleTime).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </TableCell>
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
                    <BookingActions
                      bookingId={booking.id}
                      service={booking.service}
                      status={booking.status}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {customerBookings.length === 0 && (
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
