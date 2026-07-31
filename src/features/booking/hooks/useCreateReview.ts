import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createReview } from "../api/booking.api";

interface CreateReviewInput {
  bookingId: string;
  rating: number;
  comment?: string;
}

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError<ApiErrorResponse>, CreateReviewInput>({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myBookings"] });
    },
  });
};
