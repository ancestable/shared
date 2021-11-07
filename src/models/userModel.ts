export interface IUserModel {
  _id?: string;
  id?: string;
  email: string;
  password: string;
}

export type UserCreationModel = Pick<IUserModel, 'email' | 'password'>;
export type LoginModel = Pick<IUserModel, 'email' | 'password'>;
export interface LoginResponseModel {
  authToken: string;
  expiresIn: string;
}
