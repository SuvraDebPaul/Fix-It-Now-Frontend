import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  Star,
  UserCircle,
  Wrench,
  CalendarClock,
  Users,
  Tags,
  type LucideIcon,
} from "lucide-react";

export interface DashboardNavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const customerNavItems: DashboardNavItem[] = [
  { title: "Overview", url: "/dashboard/customer", icon: LayoutDashboard },
  {
    title: "My Bookings",
    url: "/dashboard/customer/bookings",
    icon: CalendarCheck,
  },
  {
    title: "Payments",
    url: "/dashboard/customer/payments",
    icon: CreditCard,
  },
  { title: "Reviews", url: "/dashboard/customer/reviews", icon: Star },
  { title: "Profile", url: "/dashboard/customer/profile", icon: UserCircle },
];

export const technicianNavItems: DashboardNavItem[] = [
  { title: "Overview", url: "/dashboard/technician", icon: LayoutDashboard },
  {
    title: "Bookings",
    url: "/dashboard/technician/bookings",
    icon: CalendarCheck,
  },
  {
    title: "My Services",
    url: "/dashboard/technician/services",
    icon: Wrench,
  },
  {
    title: "Availability",
    url: "/dashboard/technician/availability",
    icon: CalendarClock,
  },
  { title: "Reviews", url: "/dashboard/technician/reviews", icon: Star },
  {
    title: "Profile",
    url: "/dashboard/technician/profile",
    icon: UserCircle,
  },
];

export const adminNavItems: DashboardNavItem[] = [
  { title: "Overview", url: "/dashboard/admin", icon: LayoutDashboard },
  { title: "Users", url: "/dashboard/admin/users", icon: Users },
  {
    title: "Bookings",
    url: "/dashboard/admin/bookings",
    icon: CalendarCheck,
  },
  { title: "Categories", url: "/dashboard/admin/categories", icon: Tags },
  { title: "Profile", url: "/dashboard/admin/profile", icon: UserCircle },
];
