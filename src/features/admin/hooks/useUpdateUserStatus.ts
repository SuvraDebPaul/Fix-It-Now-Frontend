import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { updateUserStatus } from "../api/admin.api";
import type { ApiErrorResponse } from "@/features/auth/types/auth.types";
import type { UserStatus } from "../types/admin.types";

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    { id: string; status: UserStatus }
  >({
    mutationFn: ({ id, status }) => updateUserStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminUsers"] });
    },
  });
};
