"use client";

import { useState } from "react";
import { Star, Users } from "lucide-react";
import { toast } from "sonner";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/format";
import { useAdminUsers } from "@/features/admin/hooks/useAdminUsers";
import { useUpdateUserStatus } from "@/features/admin/hooks/useUpdateUserStatus";
import type { AdminUserRow } from "@/features/admin/types/admin.types";
import { TableRowsSkeleton } from "@/components/dashboard/loading-skeletons";

export default function AdminUsersPage() {
  const { data: users, isLoading } = useAdminUsers();
  const { mutate, isPending, variables } = useUpdateUserStatus();
  const [selectedUser, setSelectedUser] = useState<AdminUserRow | null>(null);

  function toggleStatus(id: string, currentStatus: "ACTIVE" | "BLOCKED") {
    const nextStatus = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE";
    mutate(
      { id, status: nextStatus },
      {
        onSuccess: () => {
          toast.success(
            nextStatus === "BLOCKED" ? "User blocked" : "User unblocked",
          );
        },
        onError: (error) => {
          const message =
            error.response?.data?.message ??
            "Couldn't update user status. Please try again.";
          toast.error(message);
        },
      },
    );
  }

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/admin"
        rootLabel="Dashboard"
        pageLabel="Users"
      />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <DashboardPageHeader
          title="Users"
          description="All customers and technicians registered on FixItNow."
        />

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRowsSkeleton columns={6} />}
              {users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    {user.role !== "ADMIN" ? (
                      <button
                        type="button"
                        className="hover:text-primary hover:underline"
                        onClick={() => setSelectedUser(user)}
                      >
                        {user.name}
                      </button>
                    ) : (
                      user.name
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.email}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                      {user.role.toLowerCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(user.createdAt)}</TableCell>
                  <TableCell>
                    <StatusBadge status={user.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    {user.role !== "ADMIN" && (
                      <Button
                        size="sm"
                        variant={
                          user.status === "ACTIVE" ? "outline" : "default"
                        }
                        disabled={isPending && variables?.id === user.id}
                        onClick={() => toggleStatus(user.id, user.status)}
                      >
                        {user.status === "ACTIVE" ? "Block" : "Unblock"}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {!isLoading && users?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <EmptyState
                      icon={Users}
                      title="No users yet"
                      description="Registered customers and technicians will appear here."
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog
        open={!!selectedUser}
        onOpenChange={(open) => !open && setSelectedUser(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedUser?.name}</DialogTitle>
          </DialogHeader>
          {selectedUser?.role === "CUSTOMER" &&
            selectedUser.customerProfile && (
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  {selectedUser.customerProfile.phone ?? "—"}
                </p>
                <p>
                  <span className="text-muted-foreground">Address:</span>{" "}
                  {selectedUser.customerProfile.address ?? "—"}
                </p>
                <p>
                  <span className="text-muted-foreground">City / Area:</span>{" "}
                  {selectedUser.customerProfile.city ?? "—"} /{" "}
                  {selectedUser.customerProfile.area ?? "—"}
                </p>
              </div>
            )}
          {selectedUser?.role === "TECHNICIAN" &&
            selectedUser.technicianProfile && (
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  {selectedUser.technicianProfile.phone ?? "—"}
                </p>
                <p>
                  <span className="text-muted-foreground">Location:</span>{" "}
                  {selectedUser.technicianProfile.location ?? "—"}
                </p>
                <p>
                  <span className="text-muted-foreground">Experience:</span>{" "}
                  {selectedUser.technicianProfile.experience ?? "—"} years
                </p>
                <p>
                  <span className="text-muted-foreground">Hourly Rate:</span> $
                  {selectedUser.technicianProfile.hourlyRate ?? "—"}
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-muted-foreground">Rating:</span>
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  {selectedUser.technicianProfile.averageRating.toFixed(1)} (
                  {selectedUser.technicianProfile.totalReviews} reviews)
                </p>
                <p>
                  <span className="text-muted-foreground">Bio:</span>{" "}
                  {selectedUser.technicianProfile.bio ?? "—"}
                </p>
              </div>
            )}
        </DialogContent>
      </Dialog>
    </>
  );
}
