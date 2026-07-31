export interface Payment {
  id: string;
  bookingId: string;
  transactionId: string;
  amount: string;
  provider: string;
  status: string;
  paymentUrl: string;
}
