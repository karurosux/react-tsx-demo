import { ActionsEnum } from '../enums/ActionsEnum';
import { AuthSource } from '../sources/AuthSource';
import { SessionSource } from '../sources/SessionSource';
import { emailNotFoundAction } from './ErrorMessageActions';
import { navigateTo } from './NavigateAction';

export const signInAction = (email: string) => (dispatch: any) => {
  AuthSource.signIn(email)
    .then(res => res.json())
    .then(res => {
      if (res.length === 0) {
        return dispatch(emailNotFoundAction(email));
      }

      SessionSource.setSession(res[0]);

      dispatch({
        type: ActionsEnum.SIGN_IN,
        ...res[0]
      });
      dispatch(navigateTo('/dashboard'));
    });
};
