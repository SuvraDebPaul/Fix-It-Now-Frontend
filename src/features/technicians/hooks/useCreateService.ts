import { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CreateServicePayload } from "../types/technicians.types";
import { createTechnicianService } from "../api/technicians.api";

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    CreateServicePayload
  >({
    mutationFn: createTechnicianService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["technicianServices"] });
    },
  });
};
