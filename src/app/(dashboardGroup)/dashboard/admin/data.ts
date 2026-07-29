export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
}

export const adminUsers: AdminUser[] = [
  {
    id: "usr_1",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "CUSTOMER",
    status: "ACTIVE",
    createdAt: "2026-05-02T10:00:00",
  },
  {
    id: "usr_2",
    name: "Andron Black",
    email: "andron.black@example.com",
    role: "TECHNICIAN",
    status: "ACTIVE",
    createdAt: "2026-04-18T10:00:00",
  },
  {
    id: "usr_3",
    name: "Marcus O.",
    email: "marcus.o@example.com",
    role: "CUSTOMER",
    status: "ACTIVE",
    createdAt: "2026-06-01T10:00:00",
  },
  {
    id: "usr_4",
    name: "Harry White",
    email: "harry.white@example.com",
    role: "TECHNICIAN",
    status: "BLOCKED",
    createdAt: "2026-03-11T10:00:00",
  },
  {
    id: "usr_5",
    name: "Priya Shah",
    email: "priya.shah@example.com",
    role: "CUSTOMER",
    status: "ACTIVE",
    createdAt: "2026-06-20T10:00:00",
  },
];

export interface AdminBooking {
  id: string;
  service: string;
  customer: string;
  technician: string;
  scheduleTime: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  totalAmount: number;
}

export const adminBookings: AdminBooking[] = [
  {
    id: "bkg_1000",
    service: "Panel Upgrade",
    customer: "Jane Doe",
    technician: "Andron Black",
    scheduleTime: "2026-07-24T10:00:00",
    status: "COMPLETED",
    totalAmount: 240,
  },
  {
    id: "bkg_2038",
    service: "Outlet Repair",
    customer: "Marcus O.",
    technician: "Andron Black",
    scheduleTime: "2026-08-01T13:00:00",
    status: "ACCEPTED",
    totalAmount: 110,
  },
  {
    id: "bkg_2030",
    service: "Lighting Install",
    customer: "Priya Shah",
    technician: "Andron Black",
    scheduleTime: "2026-07-28T10:00:00",
    status: "IN_PROGRESS",
    totalAmount: 175,
  },
  {
    id: "bkg_0991",
    service: "Interior Wall Painting",
    customer: "Jane Doe",
    technician: "Michelle Carol",
    scheduleTime: "2026-06-30T13:00:00",
    status: "CANCELLED",
    totalAmount: 320,
  },
  {
    id: "bkg_2041",
    service: "Panel Upgrade",
    customer: "Tom Reyes",
    technician: "Andron Black",
    scheduleTime: "2026-08-03T09:00:00",
    status: "REQUESTED",
    totalAmount: 240,
  },
];

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
}

export const adminCategories: AdminCategory[] = [
  {
    id: "cat_1",
    name: "Electrical",
    slug: "electrical",
    description: "Wiring, panels, outlets, lighting.",
    isActive: true,
  },
  {
    id: "cat_2",
    name: "Plumbing",
    slug: "plumbing",
    description: "Leaks, clogs, fixture installs.",
    isActive: true,
  },
  {
    id: "cat_3",
    name: "Carpentry",
    slug: "carpentry",
    description: "Custom builds, repairs, assembly.",
    isActive: true,
  },
  {
    id: "cat_4",
    name: "HVAC",
    slug: "hvac",
    description: "AC servicing, furnace checks.",
    isActive: false,
  },
  {
    id: "cat_5",
    name: "General Repairs",
    slug: "general-repairs",
    description: "Patch-ups and everyday household repairs.",
    isActive: true,
  },
  {
    id: "cat_6",
    name: "Re-Construction",
    slug: "re-construction",
    description: "Doors, windows, and structural rework.",
    isActive: true,
  },
  {
    id: "cat_7",
    name: "Painting",
    slug: "painting",
    description: "Interior and exterior painting, prep to finish.",
    isActive: true,
  },
];
