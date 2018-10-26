import { ActionsEnum } from '../enums/ActionsEnum';

export const unauthenticatedErrorMessageAction = () => {
  return {
    type: ActionsEnum.UNAUTHENTICATED,
    message: 'Not authenticated.'
  };
};

export const emailNotFoundAction = (email: string) => {
  return {
    type: ActionsEnum.EMAIL_NOT_FOUND,
    message: `The email ${email} was not found, please try another.`
  };
};
