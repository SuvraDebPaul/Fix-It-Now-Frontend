import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { registerUser } from "../api/auth.api";
import type {
  ApiErrorResponse,
  AuthResponse,
  RegisterPayload,
} from "../types/auth.types";

export const useRegister = () => {
  return useMutation<AuthResponse, AxiosError<ApiErrorResponse>, RegisterPayload>({
    mutationFn: registerUser,
  });
};
