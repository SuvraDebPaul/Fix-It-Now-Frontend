"use client";

import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SiteHeader } from "@/components/dashboard/site-header";
import { UserAvatar } from "@/components/shared/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { getInitials } from "@/lib/utils";
import { formatDate } from "@/lib/format";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

export default function AdminProfilePage() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <>
      <SiteHeader
        rootHref="/dashboard/admin"
        rootLabel="Dashboard"
        pageLabel="Profile"
      />
      <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
        <DashboardPageHeader
          title="Profile"
          description="Your admin account details."
        />

        {isLoading && (
          <p className="text-sm text-muted-foreground">Loading...</p>
        )}
        {!isLoading && user && (
          <Card className="max-w-2xl">
            <CardHeader className="flex-row items-center gap-4">
              <UserAvatar
                name={user.name}
                fallback={getInitials(user.name)}
                className="h-16 w-16"
                fallbackClassName="bg-primary/20 text-lg text-primary"
              />
              <div>
                <CardTitle>{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input id="name" value={user.name} readOnly disabled />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" value={user.email} readOnly disabled />
                </Field>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Joined {formatDate(user.createdAt)}</span>
                <Badge variant="secondary" className="capitalize">
                  {user.role.toLowerCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
