import { Wrench } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { SiteHeader } from "@/components/dashboard/site-header";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { technicianServices } from "../data";
import { AddServiceDialog } from "./add-service-dialog";

export default function TechnicianServicesPage() {
  return (
    <>
      <SiteHeader
        rootHref="/dashboard/technician"
        rootLabel="Dashboard"
        pageLabel="My Services"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">My Services</h1>
            <p className="text-sm text-muted-foreground">
              Services you offer, visible to customers browsing FixItNow.
            </p>
          </div>
          <AddServiceDialog />
        </div>

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
              {technicianServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">
                    {service.title}
                  </TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell className="max-w-64 truncate text-muted-foreground">
                    {service.description}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        service.isActive
                          ? "border-transparent bg-green-100 text-green-700"
                          : "border-transparent bg-gray-200 text-gray-700"
                      }
                    >
                      {service.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    ${service.price}
                  </TableCell>
                </TableRow>
              ))}
              {technicianServices.length === 0 && (
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
