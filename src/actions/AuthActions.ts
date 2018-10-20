import { AuthEnum } from '../enums/AuthEnum';

export const signInAction = (username: string, password: string) => ({
  password,
  type: AuthEnum.SIGN_IN,
  username
});
