import { AuthEnum } from '../enums/AuthEnum';
import { AuthSource } from '../sources/AuthSource';

export const signInAction = (email: string) => (dispatch: any) => {
  AuthSource.signIn(email)
    .then(res => res.json())
    .then(res => {
      if (res.length === 0) {
        return dispatch(emailNotFoundAction(email));
      }

      dispatch({
        type: AuthEnum.SIGN_IN,
        ...res[0]
      });
    });
};

export const emailNotFoundAction = (email: string) => {
  return {
    type: AuthEnum.EMAIL_NOT_FOUND,
    message: `The email ${email} was not found, please try another.`
  };
};
