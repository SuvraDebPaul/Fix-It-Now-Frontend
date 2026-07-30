import { api } from "@/lib/axios";

export const getAllTechnician = async () => {
  const { data } = await api.get("/technicians");
  console.log(data);
  return data.data;
};

export const getTechnicianProfile = async (id: string) => {
  const { data } = await api.get(`/technicians/${id}`);
  console.log(data);
  return data.data;
};

export const getTechnicianBookings = async () => {
  const { data } = await api.get("/technician/bookings");
  console.log(data);
  return data.data;
};
