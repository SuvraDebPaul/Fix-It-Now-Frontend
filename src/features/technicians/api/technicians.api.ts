import { api } from "@/lib/axios";
import {
  RawTechnicianListItem,
  TechnicianCard,
  TechnicianProfile,
} from "../types/technicians.types";
import { getAllServices } from "@/features/services/api/services.api";

const FALLBACK_TECHNICIAN_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&auto=format&fit=facearea&facepad=3";

function mapTechnicianCard(raw: RawTechnicianListItem): TechnicianCard {
  return {
    id: raw.id,
    name: raw.user.name,
    image: raw.profilePhoto ?? FALLBACK_TECHNICIAN_IMAGE,
    specialty: raw.services[0]?.title ?? "General Handyman",
    rating: raw.averageRating,
    reviewCount: raw.totalReviews,
  };
}

export const getAllTechnician = async (): Promise<TechnicianCard[]> => {
  const { data } = await api.get<{ data: RawTechnicianListItem[] }>(
    "/technicians",
  );
  return data.data.map(mapTechnicianCard);
};

export const getTechnicianProfile = async (
  id: string,
): Promise<TechnicianProfile> => {
  const { data } = await api.get<{ data: RawTechnicianListItem }>(
    `/technicians/${id}`,
  );
  const raw = data.data;
  const allServices = await getAllServices();
  const technicianServices = allServices.filter(
    (service) => service.technician.id === raw.id,
  );
  return {
    id: raw.id,
    name: raw.user.name,
    image: raw.profilePhoto ?? FALLBACK_TECHNICIAN_IMAGE,
    specialty: technicianServices[0]?.title ?? "General Handyman",
    bio: raw.bio,
    experience: raw.experience,
    location: raw.location,
    hourlyRate: raw.hourlyRate,
    isAvailable: raw.isAvailable,
    rating: raw.averageRating,
    reviewCount: raw.totalReviews,
    reviews: raw.reviews.map((review) => ({
      customer: review.customerProfile?.user?.name ?? "Verified Customer",
      rating: review.rating,
      comment: review.comment ?? "",
      date: review.createdAt,
    })),
    services: technicianServices,
  };
};

export const getTechnicianBookings = async () => {
  const { data } = await api.get("/technician/bookings");
  console.log(data);
  return data.data;
};
