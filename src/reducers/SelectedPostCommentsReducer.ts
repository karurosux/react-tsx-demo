import { ActionsEnum } from '../enums/ActionsEnum';
import { CommentModel } from '../models/CommentModel';

export const selectedPostCommentsReducer = (state: CommentModel[], action: any) => {
  switch (action.type) {
    case ActionsEnum.OPEN_POST:
      return action.comments;
    default:
      return state || [];
  }
};
