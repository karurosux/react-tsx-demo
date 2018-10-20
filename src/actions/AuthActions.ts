import { AuthEnum } from '../enums/AuthEnum';
import { AuthSource } from '../sources/AuthSource';

export const signInAction = (email: string) => (dispatch: any) => {
  AuthSource.signIn(email)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: AuthEnum.SIGN_IN,
        ...res
      });
    });
};
