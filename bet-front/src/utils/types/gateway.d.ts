interface IGenerateQrCode {
  company_name: string;
  reference: string;
  description: string;
  company_image: string;
  amount: number;
  callback_url?: string;
}
