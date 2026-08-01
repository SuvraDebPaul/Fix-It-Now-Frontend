export type UserRole = "CUSTOMER" | "TECHNICIAN" | "ADMIN";
export type UserStatus = "ACTIVE" | "BLOCKED";

export interface RawAdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  customerProfile: {
    id: string;
    phone: string | null;
    address: string | null;
    city: string | null;
    area: string | null;
  } | null;
  technicianProfile: {
    id: string;
    bio: string | null;
    experience: number | null;
    location: string | null;
    phone: string | null;
    hourlyRate: number | null;
    isAvailable: boolean;
    averageRating: number;
    totalReviews: number;
  } | null;
}

export interface AdminUserRow {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  customerProfile: RawAdminUser["customerProfile"];
  technicianProfile: RawAdminUser["technicianProfile"];
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
  cancelReason: string | null;
  service: { title: string };
  customerProfile: { user: { name: string } };
  technicianProfile: { user: { name: string } };
  payment: {
    status: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
  } | null;
  review: {
    rating: number;
    comment: string | null;
  } | null;
}

export interface AdminBookingRow {
  id: string;
  service: string;
  customer: string;
  technician: string;
  scheduleTime: string;
  status: RawAdminBooking["status"];
  totalAmount: number;
  cancelReason: string | null;
  paymentStatus: string | null;
  reviewRating: number | null;
  reviewComment: string | null;
}

export interface CreateCategoryPayload {
  name: string;
  slug: string;
  description?: string;
}
