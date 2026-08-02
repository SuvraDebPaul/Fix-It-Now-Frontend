"use client";

import { Wrench } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { ActiveBadge } from "@/components/shared/active-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useMyServices } from "@/features/technicians/hooks/useMyServices";
import { AddServiceDialog } from "./add-service-dialog";
import { TableRowsSkeleton } from "@/components/dashboard/loading-skeletons";

export default function TechnicianServicesPage() {
  const { data: user } = useCurrentUser();
  const { data: services, isLoading, isError } = useMyServices(user?.id);

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="My Services"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="My Services"
          description="Services you offer, visible to customers browsing FixItNow."
          action={<AddServiceDialog />}
        />

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRowsSkeleton columns={5} />}
              {isError && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-sm text-destructive"
                  >
                    Couldn&apos;t load your services. Please refresh.
                  </TableCell>
                </TableRow>
              )}
              {services?.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell className="max-w-64 truncate text-muted-foreground">
                    {service.description}
                  </TableCell>
                  <TableCell>
                    <ActiveBadge isActive={service.isActive} />
                  </TableCell>
                  <TableCell className="text-right">${service.price}</TableCell>
                </TableRow>
              ))}
              {!isLoading && services?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <EmptyState
                      icon={Wrench}
                      title="No services listed"
                      description="Add a service to start appearing in the Services marketplace."
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
