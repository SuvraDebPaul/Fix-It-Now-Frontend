import { api } from "@/lib/axios";
import { Booking, CreateBookingPayload } from "../types/bookings.types";

export const createBooking = async (
  payload: CreateBookingPayload,
): Promise<Booking> => {
  const { data } = await api.post<{ data: Booking }>("/bookings", payload);
  return data.data;
};
