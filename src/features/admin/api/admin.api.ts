import { api } from "@/lib/axios";
import {
  AdminBookingRow,
  AdminUserRow,
  RawAdminBooking,
  RawAdminUser,
  UserStatus,
} from "../types/admin.types";

function mapAdminUser(raw: RawAdminUser): AdminUserRow {
  return {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    role: raw.role,
    status: raw.status,
    createdAt: raw.createdAt,
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
