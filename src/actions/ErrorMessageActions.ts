import { ErrorMessageEnum } from '../enums/ErrorMessageEnum';

export const unauthenticatedErrorMessageAction = () => {
  return {
    type: ErrorMessageEnum.UNAUTHENTICATED,
    message: 'Not authenticated.'
  };
};

export const emailNotFoundAction = (email: string) => {
  return {
    type: ErrorMessageEnum.EMAIL_NOT_FOUND,
    message: `The email ${email} was not found, please try another.`
  };
};
