"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrench } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import {
  adminNavItems,
  customerNavItems,
  technicianNavItems,
} from "./nav-config";

type DashboardRole = "customer" | "technician" | "admin";

const navItemsByRole = {
  customer: customerNavItems,
  technician: technicianNavItems,
  admin: adminNavItems,
} as const;

const navLabelByRole: Record<DashboardRole, string> = {
  customer: "Customer",
  technician: "Technician",
  admin: "Admin",
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role: DashboardRole;
  profileHref: string;
}

export function AppSidebar({ role, profileHref, ...props }: AppSidebarProps) {
  const pathname = usePathname();
  const navItems = navItemsByRole[role];
  const navLabel = navLabelByRole[role];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Wrench className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-display text-base uppercase">
                    FixItNow
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {navLabel}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser profileHref={profileHref} />
      </SidebarFooter>
    </Sidebar>
  );
}
