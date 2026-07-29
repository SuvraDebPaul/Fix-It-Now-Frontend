import { format } from "date-fns";

export function formatDateTime(value: string) {
  return format(new Date(value), "MMM d, yyyy, h:mm a");
}

export function formatDate(value: string) {
  return format(new Date(value), "MMM d, yyyy");
}
