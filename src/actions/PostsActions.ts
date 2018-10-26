import * as _ from 'lodash';
import { ActionsEnum } from '../enums/ActionsEnum';
import { AppStateModel } from '../models/AppStateModel';
import { PostModel } from '../models/PostModel';
import { PostSource } from '../sources/PostSource';
import { unauthenticatedErrorMessageAction } from './ErrorMessageActions';
import { navigateTo } from './NavigateAction';

export const fetchPosts = () => {
  return (dispatch: any, getState: any) => {
    const state: AppStateModel = getState();

    if (_.isEmpty(state.user)) {
      return dispatch(unauthenticatedErrorMessageAction());
    }

    PostSource.fetchPosts(state.user.id).then(posts => {
      dispatch({
        type: ActionsEnum.FETCH_POSTS,
        posts
      });
    });
  };
};

export const openPostAction = (post: PostModel) => {
  return (dispatch: any) => {
    PostSource.fetchPostComments(post.id).then(comments => {
      dispatch({
        type: ActionsEnum.OPEN_POST,
        post,
        comments
      });
      dispatch(navigateTo('/dashboard/post'));
    });
  };
};
