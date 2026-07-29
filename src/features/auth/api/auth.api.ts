import { api } from "@/lib/axios";
import type {
  AuthResponse,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
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
