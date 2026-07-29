import Link from "next/link";
import { CalendarCheck, ClipboardList, Tags, Users, Wrench } from "lucide-react";
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
import { adminBookings, adminCategories, adminUsers } from "./data";

export default function AdminOverviewPage() {
  const totalCustomers = adminUsers.filter(
    (u) => u.role === "CUSTOMER",
  ).length;
  const totalTechnicians = adminUsers.filter(
    (u) => u.role === "TECHNICIAN",
  ).length;
  const activeCategories = adminCategories.filter((c) => c.isActive).length;

  return (
    <>
      <SiteHeader rootHref="/dashboard/admin" rootLabel="Dashboard" />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Platform Overview"
          description="A snapshot of everything happening on FixItNow."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Customers"
            value={String(totalCustomers)}
            icon={Users}
            trend={{ percent: 12, direction: "up" }}
            hint="vs last month"
          />
          <StatCard
            label="Technicians"
            value={String(totalTechnicians)}
            icon={Wrench}
            trend={{ percent: 8, direction: "up" }}
            hint="vs last month"
          />
          <StatCard
            label="Total Bookings"
            value={String(adminBookings.length)}
            icon={CalendarCheck}
            trend={{ percent: 4, direction: "down" }}
            hint="vs last month"
          />
          <StatCard
            label="Active Categories"
            value={String(activeCategories)}
            icon={Tags}
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
              {adminBookings.map((booking) => (
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
              {adminBookings.length === 0 && (
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
