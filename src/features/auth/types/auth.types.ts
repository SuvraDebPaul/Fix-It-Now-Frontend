import type { z } from "zod";
import type { registerSchema } from "../schemas/register.schema";
import { LoginFormValues } from "../schemas/login.schemas";

export type RegisterFormValues = z.infer<typeof registerSchema>;

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  role: "CUSTOMER" | "TECHNICIAN";
};

export interface User {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
}

export type AuthResponse = User;

export interface ApiErrorResponse {
  message: string;
}

export type LoginPayload = LoginFormValues;

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
