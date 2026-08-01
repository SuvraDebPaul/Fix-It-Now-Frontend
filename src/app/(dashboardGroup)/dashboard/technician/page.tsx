"use client";

import Link from "next/link";
import { CalendarCheck, ClipboardList, CreditCard, Star } from "lucide-react";
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
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useTechnicianBookings } from "@/features/technicians/hooks/useTechnicianBookings";

export default function TechnicianOverviewPage() {
  const { data: user } = useCurrentUser();
  const { data: bookings, isLoading } = useTechnicianBookings();
  const allBookings = bookings ?? [];

  const activeBookings = allBookings.filter((b) =>
    ["ACCEPTED", "PAID", "IN_PROGRESS"].includes(b.status),
  ).length;
  const pendingRequests = allBookings.filter(
    (b) => b.status === "REQUESTED",
  ).length;
  const earnings = allBookings
    .filter((b) => b.status === "COMPLETED")
    .reduce((sum, b) => sum + b.totalAmount, 0);

  const averageRating = user?.technicianProfile?.averageRating ?? 0;
  const totalReviews = user?.technicianProfile?.totalReviews ?? 0;

  const recentBookings = [...allBookings]
    .sort(
      (a, b) =>
        new Date(b.scheduleTime).getTime() - new Date(a.scheduleTime).getTime(),
    )
    .slice(0, 4);

  return (
    <>
      <SiteHeader rootHref="/dashboard/technician" rootLabel="Dashboard" />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Welcome back"
          description={
            pendingRequests > 0
              ? `You have ${pendingRequests} new booking request${pendingRequests > 1 ? "s" : ""}.`
              : "You're all caught up."
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Active Bookings"
            value={String(activeBookings)}
            icon={CalendarCheck}
            hint="Accepted, paid, or in progress"
          />
          <StatCard
            label="Pending Requests"
            value={String(pendingRequests)}
            icon={CalendarCheck}
            hint="Awaiting your response"
          />
          <StatCard
            label="Earnings"
            value={`$${earnings}`}
            icon={CreditCard}
            hint="From completed jobs"
          />
          <StatCard
            label="Average Rating"
            value={`${averageRating.toFixed(1)} / 5`}
            icon={Star}
            hint={`${totalReviews} reviews`}
          />
        </div>

        <div className="rounded-lg border">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-semibold">Recent Bookings</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard/technician/bookings">View all</Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Customer</TableHead>
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
                  <TableCell>{booking.customer}</TableCell>
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
