import { AuthEnum } from '../enums/AuthEnum';
import { AuthSource } from '../sources/AuthSource';
import { emailNotFoundAction } from './ErrorMessageActions';
import { navigateTo } from './NavigateAction';

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
      dispatch(navigateTo('/dashboard'));
    });
};
