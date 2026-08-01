import { api } from "@/lib/axios";
import {
  AdminBookingRow,
  AdminUserRow,
  CreateCategoryPayload,
  RawAdminBooking,
  RawAdminUser,
  UserStatus,
} from "../types/admin.types";
import { RawCategory } from "@/features/services/types/services.types";
import { getAllCategories } from "@/features/services/api/services.api";

function mapAdminUser(raw: RawAdminUser): AdminUserRow {
  return {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    role: raw.role,
    status: raw.status,
    createdAt: raw.createdAt,
    customerProfile: raw.customerProfile,
    technicianProfile: raw.technicianProfile,
  };
}

function mapAdminBooking(raw: RawAdminBooking): AdminBookingRow {
  return {
    id: raw.id,
    service: raw.service.title,
    customer: raw.customerProfile.user.name,
    technician: raw.technicianProfile.user.name,
    scheduleTime: raw.scheduleTime,
    status: raw.status,
    totalAmount: Number(raw.totalAmount),
    cancelReason: raw.cancelReason,
    paymentStatus: raw.payment?.status ?? null,
    reviewRating: raw.review?.rating ?? null,
    reviewComment: raw.review?.comment ?? null,
  };
}

export const getAllUsers = async (): Promise<AdminUserRow[]> => {
  const { data } = await api.get<{ data: RawAdminUser[] }>("/admin/users");
  return data.data.map(mapAdminUser);
};

export const updateUserStatus = async (id: string, status: UserStatus) => {
  const { data } = await api.patch(`/admin/users/${id}`, { status });
  return data.data;
};

export const getAllBookings = async (): Promise<AdminBookingRow[]> => {
  const { data } = await api.get<{ data: RawAdminBooking[] }>(
    "/admin/bookings",
  );
  return data.data.map(mapAdminBooking);
};

export const getCategories = async (): Promise<RawCategory[]> => {
  return getAllCategories();
};

export const createCategory = async (payload: CreateCategoryPayload) => {
  const { data } = await api.post("/admin/categories", payload);
  return data.data;
};
