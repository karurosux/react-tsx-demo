import * as _ from 'lodash';
import { PostsEnum } from '../enums/PostsEnum';
import { AppStateModel } from '../models/AppStateModel';
import { PostSource } from '../sources/PostSource';
import { unauthenticatedErrorMessageAction } from './ErrorMessageActions';

export const fetchPosts = () => {
  return (dispatch: any, getState: any) => {
    const state: AppStateModel = getState();

    if (_.isEmpty(state.user)) {
      return dispatch(unauthenticatedErrorMessageAction());
    }

    PostSource.fetchPosts(state.user.id).then(posts => {
      dispatch({
        type: PostsEnum.FETCH_POSTS,
        posts
      });
    });
  };
};
