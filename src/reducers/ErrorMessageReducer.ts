import { ActionsEnum } from '../enums/ActionsEnum';

export const errorMessageReducer = (state: string, action: any) => {
  switch (action.type) {
    case ActionsEnum.UNAUTHENTICATED:
    case ActionsEnum.EMAIL_NOT_FOUND:
      return action.message;
    default:
      return state || '';
  }
};
