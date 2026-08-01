import { api } from "@/lib/axios";
import { Payment, PaymentRow, RawPayment } from "../types/payments.types";

function mapPayment(raw: RawPayment): PaymentRow {
  return {
    id: raw.id,
    service: raw.booking.service.title,
    provider: raw.provider,
    paidAt: raw.paidAt,
    status: raw.status,
    amount: Number(raw.amount),
  };
}

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

export const getMyPayments = async (): Promise<PaymentRow[]> => {
  const { data } = await api.get<{ data: RawPayment[] }>("/payments");
  return data.data.map(mapPayment);
};
