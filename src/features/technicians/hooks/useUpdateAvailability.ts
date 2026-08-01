import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AvailabilitySlotInput } from "../types/technicians.types";
import { updateAvailability } from "../api/technicians.api";

export const useUpdateAvailability = () => {
  const queryClient = useQueryClient();
  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    AvailabilitySlotInput[]
  >({
    mutationFn: updateAvailability,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
};
