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
  technicianProfile?: {
    id: string;
    profilePhoto: string | null;
    bio: string;
    experience: number;
    location: string;
    phone: string;
    hourlyRate: number;
    isAvailable: boolean;
    averageRating: number;
    totalReviews: number;
    availability: RawAvailabilitySlot[];
  } | null;
  customerProfile?: {
    id: string;
    profilePhoto: string | null;
    phone: string | null;
    address: string | null;
    city: string | null;
    area: string | null;
    totalBookings: number;
  } | null;
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

export interface RawAvailabilitySlot {
  id: string;
  day:
    | "SATURDAY"
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY";
  startTime: string;
  endTime: string;
  isActive: boolean;
}

export interface UpdateCustomerProfilePayload {
  profilePhoto?: string;
  phone?: string;
  address?: string;
  city?: string;
  area?: string;
}
