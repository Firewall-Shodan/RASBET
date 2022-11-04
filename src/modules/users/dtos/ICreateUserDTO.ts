interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  nif: string;
}

export { ICreateUserDTO };
