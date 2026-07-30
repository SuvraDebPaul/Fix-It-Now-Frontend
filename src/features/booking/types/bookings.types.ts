export interface CreateBookingPayload {
  serviceId: string;
  scheduleTime: string;
  address: string;
}

export type BookingStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "PAID"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface Booking {
  id: string;
  customerProfile: string;
  technicianProfile: string;
  serviceId: string;
  scheduleTime: string;
  address: string;
  totalAmount: string;
  status: BookingStatus;
  cancelReason?: string | null;
  updatedAt: string;
}
