import { api } from "@/lib/axios";
import type {
  RawCategory,
  RawService,
  ServiceListing,
} from "../types/services.types";
import { RawTechnicianListItem } from "@/features/technicians/types/technicians.types";

const FALLBACK_SERVICE_IMAGE =
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop";

function mapService(raw: RawService): ServiceListing {
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    price: Number(raw.price),
    category: raw.category.name,
    image: raw.technicianProfile.profilePhoto ?? FALLBACK_SERVICE_IMAGE,
    isActive: raw.isActive,
    technician: {
      id: raw.technicianProfile.id,
      name: raw.technicianProfile.user.name,
      avatar: raw.technicianProfile.profilePhoto,
      rating: raw.technicianProfile.averageRating,
      reviewCount: raw.technicianProfile.totalReviews,
      location: raw.technicianProfile.location,
    },
  };
}

export const getAllServices = async (): Promise<ServiceListing[]> => {
  const response = await api.get("/services");
  const rawServices: RawService[] = response.data.data;
  return rawServices.map(mapService);
};

export const getServiceById = async (id: string): Promise<ServiceListing> => {
  const { data } = await api.get(`/services/${id}`);
  const rawService: RawService = data.data;
  return mapService(rawService);
};

export const getAllCategories = async (): Promise<RawCategory[]> => {
  const { data } = await api.get<{ data: RawCategory[] }>("/categories");
  return data.data;
};

export const getMyTechnicianServices = async (
  userId: string,
): Promise<ServiceListing[]> => {
  const { data } = await api.get<{ data: RawTechnicianListItem[] }>(
    "/technicians",
  );
  const myProfile = data.data.find((t) => t.user.id === userId);
  if (!myProfile) return [];

  const allServices = await getAllServices();
  return allServices.filter((s) => s.technician.id === myProfile.id);
};
