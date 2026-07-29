export interface TechBooking {
  id: string;
  service: string;
  customer: string;
  scheduleTime: string;
  address: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";
  totalAmount: number;
}

export const technicianBookings: TechBooking[] = [
  {
    id: "bkg_2041",
    service: "Panel Upgrade",
    customer: "Jane Doe",
    scheduleTime: "2026-08-03T09:00:00",
    address: "212 Maple St, Springfield",
    status: "REQUESTED",
    totalAmount: 240,
  },
  {
    id: "bkg_2038",
    service: "Outlet Repair",
    customer: "Marcus O.",
    scheduleTime: "2026-08-01T13:00:00",
    address: "44 Elm St, Springfield",
    status: "ACCEPTED",
    totalAmount: 110,
  },
  {
    id: "bkg_2030",
    service: "Lighting Install",
    customer: "Priya Shah",
    scheduleTime: "2026-07-28T10:00:00",
    address: "9 Oak Ave, Springfield",
    status: "IN_PROGRESS",
    totalAmount: 175,
  },
  {
    id: "bkg_2019",
    service: "Circuit Breaker Fix",
    customer: "Tom Reyes",
    scheduleTime: "2026-07-20T15:00:00",
    address: "77 Cedar Ln, Springfield",
    status: "COMPLETED",
    totalAmount: 200,
  },
  {
    id: "bkg_2011",
    service: "Wiring Inspection",
    customer: "Alina Cho",
    scheduleTime: "2026-07-12T11:00:00",
    address: "5 Birch Ave, Springfield",
    status: "DECLINED",
    totalAmount: 90,
  },
];

export interface TechService {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  isActive: boolean;
}

export const technicianServices: TechService[] = [
  {
    id: "svc_1",
    title: "Panel Upgrade",
    category: "Electrical",
    description: "Full electrical panel replacement and upgrade.",
    price: 240,
    isActive: true,
  },
  {
    id: "svc_2",
    title: "Outlet Repair",
    category: "Electrical",
    description: "Diagnose and fix faulty outlets and switches.",
    price: 65,
    isActive: true,
  },
  {
    id: "svc_3",
    title: "Lighting Install",
    category: "Electrical",
    description: "Fixture installation, indoor and outdoor.",
    price: 90,
    isActive: false,
  },
];

export interface AvailabilitySlot {
  id: string;
  day:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  startTime: string;
  endTime: string;
  isActive: boolean;
}

export const technicianAvailability: AvailabilitySlot[] = [
  { id: "slot_1", day: "MONDAY", startTime: "09:00", endTime: "17:00", isActive: true },
  { id: "slot_2", day: "TUESDAY", startTime: "09:00", endTime: "17:00", isActive: true },
  { id: "slot_3", day: "WEDNESDAY", startTime: "09:00", endTime: "17:00", isActive: true },
  { id: "slot_4", day: "THURSDAY", startTime: "09:00", endTime: "17:00", isActive: true },
  { id: "slot_5", day: "FRIDAY", startTime: "09:00", endTime: "14:00", isActive: true },
  { id: "slot_6", day: "SATURDAY", startTime: "10:00", endTime: "13:00", isActive: false },
];

export interface TechReview {
  id: string;
  customer: string;
  service: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const technicianReviews: TechReview[] = [
  {
    id: "rev_701",
    customer: "Tom Reyes",
    service: "Circuit Breaker Fix",
    rating: 5,
    comment: "Diagnosed the issue in minutes. Highly recommend.",
    createdAt: "2026-07-20T18:00:00",
  },
  {
    id: "rev_698",
    customer: "Priya Shah",
    service: "Lighting Install",
    rating: 4,
    comment: "Good work, arrived a little late.",
    createdAt: "2026-07-10T12:00:00",
  },
];
