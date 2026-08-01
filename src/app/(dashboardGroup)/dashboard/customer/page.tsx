"use client";

import Link from "next/link";
import {
  CalendarCheck,
  ClipboardList,
  CreditCard,
  Star,
  Wrench,
} from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StatCard } from "@/components/dashboard/stat-card";
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
import { useMyBookings } from "@/features/booking/hooks/useMyBookings";

export default function CustomerOverviewPage() {
  const { data: bookings, isLoading } = useMyBookings();
  const allBookings = bookings ?? [];

  const activeBookings = allBookings.filter((b) =>
    ["REQUESTED", "ACCEPTED", "PAID", "IN_PROGRESS"].includes(b.status),
  ).length;
  const completedBookings = allBookings.filter(
    (b) => b.status === "COMPLETED",
  ).length;
  const totalSpent = allBookings
    .filter((b) => ["PAID", "IN_PROGRESS", "COMPLETED"].includes(b.status))
    .reduce((sum, b) => sum + b.totalAmount, 0);

  const recentBookings = [...allBookings]
    .sort(
      (a, b) =>
        new Date(b.scheduleTime).getTime() - new Date(a.scheduleTime).getTime(),
    )
    .slice(0, 4);

  return (
    <>
      <SiteHeader rootHref="/dashboard/customer" rootLabel="Dashboard" />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Welcome back"
          description="Here's what's happening with your bookings."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            label="Active Bookings"
            value={String(activeBookings)}
            icon={CalendarCheck}
            hint="Requested, accepted, or in progress"
          />
          <StatCard
            label="Completed Jobs"
            value={String(completedBookings)}
            icon={Wrench}
            hint="All-time completed services"
          />
          <StatCard
            label="Total Spent"
            value={`$${totalSpent}`}
            icon={CreditCard}
            hint="Across paid bookings"
          />
        </div>

        <div className="rounded-lg border">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-semibold">Recent Bookings</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard/customer/bookings">View all</Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Technician</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-sm text-muted-foreground"
                  >
                    Loading bookings...
                  </TableCell>
                </TableRow>
              )}
              {recentBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.service}
                  </TableCell>
                  <TableCell>{booking.technicain}</TableCell>
                  <TableCell>{formatDateTime(booking.scheduleTime)}</TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    ${booking.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
              {!isLoading && recentBookings.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>
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

        <div className="rounded-lg border bg-primary/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Need something fixed?</h3>
                <p className="text-sm text-muted-foreground">
                  Browse services and book a vetted technician in minutes.
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
