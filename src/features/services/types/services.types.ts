export interface RawCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
}

export interface RawTechnicianUser {
  id: string;
  name: string;
  email: string;
}

export interface RawTechnicianProfile {
  id: string;
  userId: string;
  profilePhoto: string | null;
  bio: string;
  experience: number;
  location: string;
  phone: string;
  hourlyRate: number;
  isAvailable: boolean;
  averageRating: number;
  totalReviews: number;
  user: RawTechnicianUser;
}

export interface RawService {
  id: string;
  categoryId: string;
  technicianProfileId: string;
  title: string;
  description: string;
  price: string;
  isActive: boolean;
  category: RawCategory;
  technicianProfile: RawTechnicianProfile;
}

export interface TechnicianSummary {
  id: string;
  name: string;
  avatar: string | null;
  rating: number;
  reviewCount: number;
  location: string;
}

export interface ServiceListing {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  technician: TechnicianSummary;
}
