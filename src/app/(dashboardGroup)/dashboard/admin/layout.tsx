import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { RequireRole } from "@/components/dashboard/require-role";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireRole role="ADMIN">
      <SidebarProvider>
        <AppSidebar role="admin" profileHref="/dashboard/admin/profile" />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </RequireRole>
  );
}
