import { api } from "@/lib/axios";
import { AdminUserRow, RawAdminUser, UserStatus } from "../types/admin.types";

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

export const getAllUsers = async (): Promise<AdminUserRow[]> => {
  const { data } = await api.get<{ data: RawAdminUser[] }>("/admin/users");
  return data.data.map(mapAdminUser);
};

export const updateUserStatus = async (id: string, status: UserStatus) => {
  const { data } = await api.patch(`/admin/users/${id}`, { status });
  return data.data;
};
