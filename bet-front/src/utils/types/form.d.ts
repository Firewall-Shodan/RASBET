interface ILoginFormData {
  email: string;
  password: string;
}

interface IRegisterFormData {
  fullName: string;
  email: string;
  password: string;
  c_password: string;
  nif: string;
}

interface IRecoverPasswordFormData {
  email: string;
}

interface IResetPasswordFormData {
  password: string;
  c_password: string;
}
