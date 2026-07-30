import { useMutation } from "@tanstack/react-query";
import { Booking, CreateBookingPayload } from "../types/bookings.types";
import { AxiosError } from "axios";
import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { createBooking } from "../api/booking.api";

export const useCreateBookings = () => {
  return useMutation<
    Booking,
    AxiosError<ApiErrorResponse>,
    CreateBookingPayload
  >({
    mutationFn: createBooking,
  });
};
