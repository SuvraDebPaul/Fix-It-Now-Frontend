"use client";

import { CreditCard } from "lucide-react";
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
import { useMyPayments } from "@/features/payments/hooks/useMyPayments";

export default function CustomerPaymentsPage() {
  const { data: payments, isLoading, isError } = useMyPayments();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/customer"
        rootLabel="Dashboard"
        pageLabel="Payments"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="Payments"
          description="Payment history for your bookings."
        />

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Paid At</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-sm text-muted-foreground"
                  >
                    Loading payments...
                  </TableCell>
                </TableRow>
              )}
              {isError && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-sm text-destructive"
                  >
                    Couldn&apos;t load payments. Please refresh.
                  </TableCell>
                </TableRow>
              )}
              {payments?.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {payment.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {payment.service}
                  </TableCell>
                  <TableCell className="capitalize">
                    {payment.provider.toLowerCase()}
                  </TableCell>
                  <TableCell>
                    {payment.paidAt ? formatDateTime(payment.paidAt) : "—"}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={payment.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    ${payment.amount}
                  </TableCell>
                </TableRow>
              ))}
              {!isLoading && payments?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <EmptyState
                      icon={CreditCard}
                      title="No payments yet"
                      description="Payments show up here once you pay for an accepted booking."
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
