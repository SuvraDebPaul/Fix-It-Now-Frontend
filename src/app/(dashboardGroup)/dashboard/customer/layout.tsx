import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { RequireRole } from "@/components/dashboard/require-role";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireRole role="CUSTOMER">
      <SidebarProvider>
        <AppSidebar role="customer" profileHref="/dashboard/customer/profile" />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </RequireRole>
  );
}
