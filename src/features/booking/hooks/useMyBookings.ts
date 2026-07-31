import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../api/booking.api";

export const useMyBookings = () => {
  return useQuery({
    queryKey: ["myBookings"],
    queryFn: getMyBookings,
  });
};
