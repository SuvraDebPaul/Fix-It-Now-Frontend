import { useMutation } from "@tanstack/react-query";
import {
  ApiErrorResponse,
  LoginPayload,
  LoginResponse,
} from "../types/auth.types";
import { AxiosError } from "axios";
import { loginUser } from "../api/auth.api";

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginPayload>(
    {
      mutationFn: loginUser,
    },
  );
};
