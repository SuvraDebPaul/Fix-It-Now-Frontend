import { useMutation } from "@tanstack/react-query";
import { Payment } from "../types/payments.types";
import { AxiosError } from "axios";
import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { createPaymentSession } from "../api/payments.api";

export const useCreatePayment = () => {
  return useMutation<Payment, AxiosError<ApiErrorResponse>, string>({
    mutationFn: createPaymentSession,
  });
};
