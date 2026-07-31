import { useQuery } from "@tanstack/react-query";
import { getTechnicianBookings } from "../api/technicians.api";

export const useTechnicianBookings = () => {
  return useQuery({
    queryKey: ["technicianBookings"],
    queryFn: getTechnicianBookings,
  });
};
