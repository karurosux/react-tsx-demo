import { ActionsEnum } from '../enums/ActionsEnum';
import { PostModel } from '../models/PostModel';

export const selectedPostReducer = (state: PostModel, action: any) => {
  switch (action.type) {
    case ActionsEnum.OPEN_POST:
      return action.post;
    default:
      return state || [];
  }
};
