export interface Booking {
  id: string;
  service: string;
  technician: string;
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
  hasReview: boolean;
}

export const customerBookings: Booking[] = [
  {
    id: "bkg_1002",
    service: "Fence Repair",
    technician: "Michelle Carol",
    scheduleTime: "2026-08-06T10:00:00",
    address: "212 Maple St, Springfield",
    status: "ACCEPTED",
    totalAmount: 150,
    hasReview: false,
  },
  {
    id: "bkg_1001",
    service: "Leaky Faucet Repair",
    technician: "Harry White",
    scheduleTime: "2026-08-02T14:30:00",
    address: "212 Maple St, Springfield",
    status: "IN_PROGRESS",
    totalAmount: 85,
    hasReview: false,
  },
  {
    id: "bkg_1000",
    service: "Panel Upgrade",
    technician: "Andron Black",
    scheduleTime: "2026-07-24T10:00:00",
    address: "212 Maple St, Springfield",
    status: "COMPLETED",
    totalAmount: 240,
    hasReview: true,
  },
  {
    id: "bkg_0998",
    service: "Custom Shelving",
    technician: "Matthew Mark",
    scheduleTime: "2026-07-15T09:00:00",
    address: "212 Maple St, Springfield",
    status: "COMPLETED",
    totalAmount: 180,
    hasReview: false,
  },
  {
    id: "bkg_0991",
    service: "Interior Wall Painting",
    technician: "Michelle Carol",
    scheduleTime: "2026-06-30T13:00:00",
    address: "88 Birch Ave, Springfield",
    status: "CANCELLED",
    totalAmount: 320,
    hasReview: false,
  },
  {
    id: "bkg_0985",
    service: "AC Servicing",
    technician: "Jonathan Larry",
    scheduleTime: "2026-08-05T11:00:00",
    address: "212 Maple St, Springfield",
    status: "REQUESTED",
    totalAmount: 95,
    hasReview: false,
  },
];

export interface PaymentRow {
  id: string;
  bookingId: string;
  service: string;
  amount: number;
  provider: "STRIPE" | "SSLCOMMERZ";
  status: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
  paidAt: string | null;
}

export const customerPayments: PaymentRow[] = [
  {
    id: "pay_501",
    bookingId: "bkg_1000",
    service: "Panel Upgrade",
    amount: 240,
    provider: "STRIPE",
    status: "COMPLETED",
    paidAt: "2026-07-24T10:05:00",
  },
  {
    id: "pay_498",
    bookingId: "bkg_0998",
    service: "Custom Shelving",
    amount: 180,
    provider: "STRIPE",
    status: "COMPLETED",
    paidAt: "2026-07-15T09:10:00",
  },
  {
    id: "pay_490",
    bookingId: "bkg_0991",
    service: "Interior Wall Painting",
    amount: 320,
    provider: "STRIPE",
    status: "REFUNDED",
    paidAt: "2026-06-30T13:20:00",
  },
];

export interface ReviewRow {
  id: string;
  bookingId: string;
  technician: string;
  service: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const customerReviews: ReviewRow[] = [
  {
    id: "rev_301",
    bookingId: "bkg_1000",
    technician: "Andron Black",
    service: "Panel Upgrade",
    rating: 5,
    comment: "Fast, clean work — explained everything before starting.",
    createdAt: "2026-07-24T16:00:00",
  },
];
