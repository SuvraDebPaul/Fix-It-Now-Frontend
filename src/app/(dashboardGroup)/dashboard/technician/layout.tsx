import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function TechnicianDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar
        role="technician"
        profileHref="/dashboard/technician/profile"
      />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
