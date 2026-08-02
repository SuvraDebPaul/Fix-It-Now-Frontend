"use client";

import { ClipboardList, Star } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/format";
import { useAdminBookings } from "@/features/admin/hooks/useAdminBookings";
import { TableRowsSkeleton } from "@/components/dashboard/loading-skeletons";

export default function AdminBookingsPage() {
  const { data: bookings, isLoading } = useAdminBookings();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/admin"
        rootLabel="Dashboard"
        pageLabel="Bookings"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="Bookings"
          description="Every booking across the platform."
        />

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SL No.</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Technician</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Review</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRowsSkeleton columns={9} />}
              {bookings?.map((booking, i) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </TableCell>
                  <TableCell className="font-medium">
                    {booking.service}
                  </TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>{booking.technician}</TableCell>
                  <TableCell>{formatDateTime(booking.scheduleTime)}</TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell>
                    {booking.paymentStatus ? (
                      <StatusBadge status={booking.paymentStatus} />
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {booking.reviewRating ? (
                      <span className="flex items-center gap-1 text-sm">
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        {booking.reviewRating}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    ${booking.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
              {!isLoading && bookings?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9}>
                    <EmptyState
                      icon={ClipboardList}
                      title="No bookings yet"
                      description="Bookings placed across the platform will appear here."
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
