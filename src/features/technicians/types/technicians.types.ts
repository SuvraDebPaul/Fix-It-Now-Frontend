import type { ServiceListing } from "@/features/services/types/services.types";
import type { BookingStatus } from "@/types/booking-status";

export type { BookingStatus };

export interface RawTechnicianUser {
  id: string;
  name: string;
  email: string;
}

export interface RawTechnicianService {
  id: string;
  title: string;
  price: string;
}

export interface RawTechnicianListItem {
  id: string;
  profilePhoto: string | null;
  bio: string;
  experience: number;
  location: string;
  hourlyRate: number;
  isAvailable: boolean;
  averageRating: number;
  totalReviews: number;
  user: RawTechnicianUser;
  services: RawTechnicianService[];
  reviews: RawTechnicianReview[];
}

export interface RawTechnicianReview {
  id: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  customerProfile?: {
    user?: { name: string };
  };
}

export interface RawTechnicianDetail {
  id: string;
  profilePhoto: string | null;
  bio: string;
  experience: number;
  location: string;
  hourlyRate: number;
  isAvailable: boolean;
  averageRating: number;
  totalReviews: number;
  user: RawTechnicianUser;
  reviews: RawTechnicianReview[];
}

export interface TechnicianCard {
  id: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  reviewCount: number;
}

export interface TechnicianReviewRow {
  customer: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TechnicianProfile {
  id: string;
  name: string;
  image: string;
  specialty: string;
  bio: string;
  experience: number;
  location: string;
  hourlyRate: number;
  isAvailable: boolean;
  rating: number;
  reviewCount: number;
  reviews: TechnicianReviewRow[];
  services: ServiceListing[];
}

export interface RawTechnicianBooking {
  id: string;
  scheduleTime: string;
  address: string;
  totalAmount: string;
  status: BookingStatus;
  cancelReason: string | null;
  customerProfile: {
    user: {
      name: string;
    };
  };
  service: {
    title: string;
  };
}

export interface TechnicianBookingRow {
  id: string;
  service: string;
  customer: string;
  scheduleTime: string;
  address: string;
  totalAmount: number;
  status: BookingStatus;
}

export interface CreateServicePayload {
  categoryId: string;
  title: string;
  description: string;
  price: number;
}

export interface AvailabilitySlotInput {
  day: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
}

export interface UpdateTechnicianProfilePayload {
  profilePhoto?: string;
  bio?: string;
  experience?: number;
  location?: string;
  phone?: string;
  hourlyRate?: number;
  isAvailable?: boolean;
}
