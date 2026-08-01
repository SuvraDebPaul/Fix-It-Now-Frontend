import { useQuery } from "@tanstack/react-query";
import { getTechnicianProfile } from "../api/technicians.api";

export const useTechnicianProfileById = (id?: string) => {
  return useQuery({
    queryKey: ["technicianProfile", id],
    queryFn: () => getTechnicianProfile(id as string),
    enabled: !!id,
  });
};
