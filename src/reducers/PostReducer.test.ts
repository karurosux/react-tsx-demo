import { ActionsEnum } from '../enums/ActionsEnum';
import { PostModel } from '../models/PostModel';
import { postsReducer } from './PostsReducer';

describe('PostsReducer', () => {
  it('should fetch posts.', () => {
    const posts: PostModel[] = [
      {
        id: 1,
        title: 'title',
        body: 'body',
        userId: 1
      }
    ];
    const result = postsReducer([], {
      type: ActionsEnum.FETCH_POSTS,
      posts
    });
    expect(result).toHaveLength(1);
  });

  it('should return state array as default.', () => {
    expect(postsReducer([], {})).toHaveLength(0);
  });

  it('should return empty array if no state.', () => {
    expect((postsReducer as any)(undefined, {})).toHaveLength(0);
  });
});
