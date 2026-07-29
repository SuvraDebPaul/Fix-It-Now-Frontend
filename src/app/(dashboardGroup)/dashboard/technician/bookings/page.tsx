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
import { technicianBookings } from "../data";

function BookingActions({ status }: { status: string }) {
  if (status === "REQUESTED") {
    return (
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="outline">
          Decline
        </Button>
        <Button size="sm">Accept</Button>
      </div>
    );
  }
  if (status === "PAID") {
    return (
      <div className="flex justify-end">
        <Button size="sm">Start Job</Button>
      </div>
    );
  }
  if (status === "IN_PROGRESS") {
    return (
      <div className="flex justify-end">
        <Button size="sm">Mark Completed</Button>
      </div>
    );
  }
  if (status === "ACCEPTED") {
    return (
      <span className="text-xs text-muted-foreground">
        Awaiting customer payment
      </span>
    );
  }
  return <span className="text-xs text-muted-foreground">—</span>;
}

export default function TechnicianBookingsPage() {
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
                <TableHead>Ticket</TableHead>
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
              {technicianBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {booking.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {booking.service}
                  </TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>
                    {formatDateTime(booking.scheduleTime)}
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
                    <BookingActions status={booking.status} />
                  </TableCell>
                </TableRow>
              ))}
              {technicianBookings.length === 0 && (
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
