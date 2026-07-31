import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookingStatus } from "../types/technicians.types";
import { AxiosError } from "axios";
import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { updateTechnicianBookingStatus } from "../api/technicians.api";

interface UpdateBookingStatusInput {
  id: string;
  status: Exclude<BookingStatus, "REQUESTED" | "PAID" | "CANCELLED">;
}

export const useUpdateBookingStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    UpdateBookingStatusInput
  >({
    mutationFn: ({ id, status }) => updateTechnicianBookingStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["technicianBookings"] });
    },
  });
};
