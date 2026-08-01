import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../api/admin.api";

export const useAdminBookings = () => {
  return useQuery({
    queryKey: ["adminBookings"],
    queryFn: getAllBookings,
  });
};
