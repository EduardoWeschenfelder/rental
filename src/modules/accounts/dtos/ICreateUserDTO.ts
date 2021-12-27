interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_licences: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
