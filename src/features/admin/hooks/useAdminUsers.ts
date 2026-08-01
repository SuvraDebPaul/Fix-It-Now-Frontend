import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/admin.api";

export const useAdminUsers = () => {
  return useQuery({
    queryKey: ["adminUsers"],
    queryFn: getAllUsers,
  });
};
