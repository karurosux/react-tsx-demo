import { ErrorMessageEnum } from '../enums/ErrorMessageEnum';

export const errorMessageReducer = (state: string, action: any) => {
  switch (action.type) {
    case ErrorMessageEnum.UNAUTHENTICATED:
    case ErrorMessageEnum.EMAIL_NOT_FOUND:
      return action.message;
    default:
      return state || '';
  }
};
