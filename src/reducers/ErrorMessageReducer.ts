import { AuthEnum } from 'src/enums/AuthEnum';

export const errorMessageReducer = (state: string, action: any) => {
  switch (action.type) {
    case AuthEnum.EMAIL_NOT_FOUND:
      return action.message;
    default:
      return '';
  }
};
