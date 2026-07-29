import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar role="customer" profileHref="/dashboard/customer/profile" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
