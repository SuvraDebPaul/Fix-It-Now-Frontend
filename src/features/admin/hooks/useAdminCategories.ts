import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/admin.api";

export const useAdminCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
