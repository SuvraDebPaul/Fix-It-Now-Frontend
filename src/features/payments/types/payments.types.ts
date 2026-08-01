export interface Payment {
  id: string;
  bookingId: string;
  transactionId: string;
  amount: string;
  provider: string;
  status: string;
  paymentUrl: string;
}

export interface RawPayment {
  id: string;
  transactionId: string;
  amount: string;
  provider: string;
  status: string;
  paidAt: string | null;
  booking: {
    service: {
      title: string;
    };
  };
}

export interface PaymentRow {
  id: string;
  service: string;
  provider: string;
  paidAt: string | null;
  status: string;
  amount: number;
}
