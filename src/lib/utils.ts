import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ApiErrorBody {
  message?: string;
}

export function getApiErrorMessage(
  error: AxiosError<ApiErrorBody>,
  fallback: string,
) {
  return error.response?.data?.message ?? fallback;
}

export function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
