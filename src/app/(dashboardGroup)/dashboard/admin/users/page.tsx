"use client";

import { Users } from "lucide-react";
import { toast } from "sonner";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function AdminUsersPage() {
  const { data: users, isLoading } = useAdminUsers();
  const { mutate, isPending, variables } = useUpdateUserStatus();

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
              {isLoading && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-sm text-muted-foreground"
                  >
                    Loading users...
                  </TableCell>
                </TableRow>
              )}
              {users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
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
    </>
  );
}
