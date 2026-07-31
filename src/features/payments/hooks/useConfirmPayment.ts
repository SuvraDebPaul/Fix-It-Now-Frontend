import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { confirmPayment } from "../api/payments.api";

export const useConfirmPayment = () => {
  return useMutation<unknown, AxiosError<ApiErrorResponse>, string>({
    mutationFn: confirmPayment,
  });
};
