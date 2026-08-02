import type { BookingStatus } from "@/types/booking-status";

export type { BookingStatus };

export interface CreateBookingPayload {
  serviceId: string;
  scheduleTime: string;
  address: string;
}

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

export interface RawBookingWithRelations {
  id: string;
  scheduleTime: string;
  address: string;
  totalAmount: string;
  status: BookingStatus;
  cancelReason: string | null;
  service: { title: string };
  technicianProfile: { user: { name: string } };
  review: { id: string; rating: number; comment: string | null } | null;
}

export interface CustomerBookingRow {
  id: string;
  service: string;
  technician: string;
  scheduleTime: string;
  address: string;
  totalAmount: number;
  status: string;
  review: { rating: number; comment: string } | null;
}

export interface CreateReviewPayload {
  bookingId: string;
  rating: number;
  comment?: string;
}
