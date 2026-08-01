"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const ROLE_HOME: Record<string, string> = {
  CUSTOMER: "/",
  TECHNICIAN: "/dashboard/technician",
  ADMIN: "/dashboard/admin",
};

export function RequireRole({
  role,
  children,
}: {
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  children: React.ReactNode;
}) {
  const { data: user, isLoading, isError } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (isError || !user) {
      router.replace("/login");
      return;
    }

    if (user.role !== role) {
      router.replace(ROLE_HOME[user.role] ?? "/login");
    }
  }, [isLoading, isError, user, role, router]);

  if (isLoading || isError || !user || user.role !== role) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
