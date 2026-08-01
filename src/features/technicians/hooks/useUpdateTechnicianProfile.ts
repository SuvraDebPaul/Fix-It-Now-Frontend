import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { UpdateTechnicianProfilePayload } from "../types/technicians.types";
import { updateTechnicianProfile } from "../api/technicians.api";

export const useUpdateTechnicianProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    UpdateTechnicianProfilePayload
  >({
    mutationFn: updateTechnicianProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
};
