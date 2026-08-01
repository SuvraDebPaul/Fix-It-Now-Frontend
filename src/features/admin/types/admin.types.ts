export type UserRole = "CUSTOMER" | "TECHNICIAN" | "ADMIN";
export type UserStatus = "ACTIVE" | "BLOCKED";

export interface RawAdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  customerProfile: { id: string } | null;
  technicianProfile: { id: string } | null;
}

export interface AdminUserRow {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
}

export interface RawAdminBooking {
  id: string;
  scheduleTime: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  totalAmount: string;
  service: { title: string };
  customerProfile: { user: { name: string } };
  technicianProfile: { user: { name: string } };
}

export interface AdminBookingRow {
  id: string;
  service: string;
  customer: string;
  technician: string;
  scheduleTime: string;
  status: RawAdminBooking["status"];
  totalAmount: number;
}
