"use client";

import Link from "next/link";
import {
  CalendarCheck,
  ClipboardList,
  Tags,
  Users,
  Wrench,
  CreditCard,
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
import { useAdminUsers } from "@/features/admin/hooks/useAdminUsers";
import { useAdminBookings } from "@/features/admin/hooks/useAdminBookings";
import { useAdminCategories } from "@/features/admin/hooks/useAdminCategories";

export default function AdminOverviewPage() {
  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const { data: bookings, isLoading: bookingsLoading } = useAdminBookings();
  const { data: categories } = useAdminCategories();

  const allUsers = users ?? [];
  const allBookings = bookings ?? [];
  const allCategories = categories ?? [];

  const totalCustomers = allUsers.filter((u) => u.role === "CUSTOMER").length;
  const totalTechnicians = allUsers.filter(
    (u) => u.role === "TECHNICIAN",
  ).length;
  const activeCategories = allCategories.filter((c) => c.isActive).length;
  const totalRevenue = allBookings
    .filter((b) => b.paymentStatus === "COMPLETED")
    .reduce((sum, b) => sum + b.totalAmount, 0);

  const recentBookings = allBookings.slice(0, 5);

  return (
    <>
      <SiteHeader rootHref="/dashboard/admin" rootLabel="Dashboard" />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Platform Overview"
          description="A snapshot of everything happening on FixItNow."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            label="Customers"
            value={String(totalCustomers)}
            icon={Users}
          />
          <StatCard
            label="Technicians"
            value={String(totalTechnicians)}
            icon={Wrench}
          />
          <StatCard
            label="Total Bookings"
            value={String(allBookings.length)}
            icon={CalendarCheck}
          />
          <StatCard
            label="Active Categories"
            value={String(activeCategories)}
            icon={Tags}
          />
          <StatCard
            label="Platform Revenue"
            value={`$${totalRevenue}`}
            icon={CreditCard}
            hint="From completed payments"
          />
        </div>

        <div className="rounded-lg border">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-semibold">Recent Bookings</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard/admin/bookings">View all</Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Technician</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(usersLoading || bookingsLoading) && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-sm text-muted-foreground"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              )}
              {recentBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.service}
                  </TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>{booking.technician}</TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    ${booking.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
              {!bookingsLoading && recentBookings.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>
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
