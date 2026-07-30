import type { ServiceListing } from "@/features/services/types/services.types";

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

// GET /technicians (list) -- includes services, no reviews
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

// GET /technicians/:id (detail) -- includes reviews, NOT services
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

// ---- Flattened, UI-facing shapes ----

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
