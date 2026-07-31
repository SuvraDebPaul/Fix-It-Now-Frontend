import { api } from "@/lib/axios";
import {
  Booking,
  CreateBookingPayload,
  CustomerBookingRow,
  RawBookingWithRelations,
} from "../types/bookings.types";

export const createBooking = async (
  payload: CreateBookingPayload,
): Promise<Booking> => {
  const { data } = await api.post<{ data: Booking }>("/bookings", payload);
  return data.data;
};

function mapBooking(raw: RawBookingWithRelations): CustomerBookingRow {
  return {
    id: raw.id,
    service: raw.service.title,
    technicain: raw.technicianProfile.user.name,
    scheduleTime: raw.scheduleTime,
    address: raw.address,
    totalAmount: Number(raw.totalAmount),
    status: raw.status,
  };
}

export const getMyBookings = async (): Promise<CustomerBookingRow[]> => {
  const { data } = await api.get<{ data: RawBookingWithRelations[] }>(
    "/bookings",
  );
  return data.data.map(mapBooking);
};

export const cancleBooking = async (id: string, cancelReason?: string) => {
  const { data } = await api.patch(`/bookings/${id}/cancel`, { cancelReason });
  return data.data;
};
