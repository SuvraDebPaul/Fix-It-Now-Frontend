import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { updateCustomerProfile } from "../api/auth.api";
import type {
  ApiErrorResponse,
  UpdateCustomerProfilePayload,
} from "../types/auth.types";

export const useUpdateCustomerProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    UpdateCustomerProfilePayload
  >({
    mutationFn: updateCustomerProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
};
