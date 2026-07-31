import { api } from "@/lib/axios";
import { Payment } from "../types/payments.types";

export const createPaymentSession = async (
  bookingId: string,
): Promise<Payment> => {
  const { data } = await api.post<{ data: Payment }>("/payments/create", {
    bookingId,
  });

  return data.data;
};

export const confirmPayment = async (sessionId: string) => {
  const { data } = await api.post("/payments/confirm", { sessionId });
  return data.data;
};
