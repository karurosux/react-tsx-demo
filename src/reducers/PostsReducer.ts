import { PostsEnum } from '../enums/PostsEnum';
import { PostModel } from '../models/PostModel';

export const postsReducer = (state: PostModel[], action: any) => {
  switch (action.type) {
    case PostsEnum.FETCH_POSTS:
      return action.posts;
    default:
      return state || [];
  }
};
