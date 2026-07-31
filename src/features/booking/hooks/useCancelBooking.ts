import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { cancleBooking } from "../api/booking.api";

interface CancelBookingInput {
  id: string;
  cancelReason: string;
}

export const useCancelBookings = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError<ApiErrorResponse>, CancelBookingInput>(
    {
      mutationFn: ({ id, cancelReason }) => {
        return cancleBooking(id, cancelReason);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["myBookings"] });
      },
    },
  );
};
