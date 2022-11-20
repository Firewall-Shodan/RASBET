interface IReceipt {
  id: string;
  paymentSystem: IPaymentSystem;
  reference: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}
