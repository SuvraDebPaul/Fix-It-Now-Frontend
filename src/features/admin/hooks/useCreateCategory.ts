import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { createCategory } from "../api/admin.api";
import type { ApiErrorResponse } from "@/features/auth/types/auth.types";
import { CreateCategoryPayload } from "../types/admin.types";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    AxiosError<ApiErrorResponse>,
    CreateCategoryPayload
  >({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
