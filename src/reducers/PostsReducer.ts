import { ActionsEnum } from '../enums/ActionsEnum';
import { PostModel } from '../models/PostModel';

export const postsReducer = (state: PostModel[], action: any) => {
  switch (action.type) {
    case ActionsEnum.FETCH_POSTS:
      return action.posts;
    default:
      return state || [];
  }
};
