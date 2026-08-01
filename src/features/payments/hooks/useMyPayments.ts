import { useQuery } from "@tanstack/react-query";
import { getMyPayments } from "../api/payments.api";

export const useMyPayments = () => {
  return useQuery({
    queryKey: ["myPayments"],
    queryFn: getMyPayments,
  });
};
