import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { RequireRole } from "@/components/dashboard/require-role";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function TechnicianDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireRole role="TECHNICIAN">
      <SidebarProvider>
        <AppSidebar
          role="technician"
          profileHref="/dashboard/technician/profile"
        />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </RequireRole>
  );
}
