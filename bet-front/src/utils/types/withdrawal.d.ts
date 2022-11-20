interface IWithdrawalFormData {
  amount: string;
  bankAccountId: string;
}

interface IMakeWithdrawal {
  walletId: string;
  amount: number;
  bankAccountId: string;
}

interface IWithdrawal {
  id: string;
  amount: number;
  status: string;
  bankAccount: IBankAccount;
  wallet: IWallet;
  createdAt: string;
  updatedAt: string;
}
