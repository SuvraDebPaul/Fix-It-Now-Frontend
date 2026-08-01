import { api } from "@/lib/axios";
import type {
  AuthResponse,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  UpdateCustomerProfilePayload,
  User,
} from "../types/auth.types";

export const registerUser = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const { data } = await api.post<{ data: AuthResponse }>(
    "/auth/register",
    payload,
  );
  return data.data;
};

export const loginUser = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const { data } = await api.post<{ data: LoginResponse }>(
    "/auth/login",
    payload,
  );

  return data.data;
};

export const logoutUser = async (): Promise<void> => {
  await api.post("/auth/logout");
};

export const getCurrentUser = async (): Promise<User> => {
  const { data } = await api.get<{ data: User }>("/auth/me");
  return data.data;
};

export const updateCustomerProfile = async (
  payload: UpdateCustomerProfilePayload,
) => {
  const { data } = await api.put("/auth/profile", payload);
  return data.data;
};
