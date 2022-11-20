interface IAddBankAccountFormData {
  designation: string;
  beneficiaryName: string;
  iban: string;
}

interface IAddBankAccount extends IAddBankAccountFormData {
  bankId: string;
  companyId: string;
}

interface IBankAccount {
  id: string;
  bank: IBank;
  designation: string;
  beneficiaryName: string;
  iban: string;
  createdAt: Date;
}
