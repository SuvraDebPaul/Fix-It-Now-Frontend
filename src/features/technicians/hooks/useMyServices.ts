import { getMyTechnicianServices } from "@/features/services/api/services.api";
import { useQuery } from "@tanstack/react-query";

export const useMyServices = (userId?: string) => {
  return useQuery({
    queryKey: ["technicianServices", userId],
    queryFn: () => getMyTechnicianServices(userId as string),
    enabled: !!userId,
  });
};
