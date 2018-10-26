import { ActionsEnum } from '../enums/ActionsEnum';
import { UserModel } from '../models/UserModel';

export const userReducer = (state: UserModel, action: any): UserModel => {
  switch (action.type) {
    case ActionsEnum.SIGN_IN:
      return singinReducer(state, action);
    default:
      return state || ({} as UserModel);
  }
};

const singinReducer = (state?: UserModel, action?: any): UserModel => {
  const { type, ...user } = action;
  return user as UserModel;
};
