interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  name: string;
  email: string;
  password: string;
  nif: string;
  birthday: string;
}

interface IVerifyAccount {
  hash: string;
}

interface IRecoverPassword {
  email: string;
}

interface IResetPassword {
  hash: string;
  password: string;
}

interface ILoginSuccess {
  token: string;
  user: IUser;
}

interface IRegisterSuccess {
  token: string;
  company: ICompany;
}
