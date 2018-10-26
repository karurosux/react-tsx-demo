import { routerReducer } from 'react-router-redux';
import { AppStateModel } from 'src/models/AppStateModel';
import { errorMessageReducer } from './ErrorMessageReducer';
import { loadingReducer } from './LoadingReducer';
import { pageInfoReducer } from './PageInfoReducer';
import { postsReducer } from './PostsReducer';
import { selectedPostCommentsReducer } from './SelectedPostCommentsReducer';
import { selectedPostReducer } from './SelectedPostReducer';
import { userReducer } from './UserReducer';

export const reducers = (state: AppStateModel = {} as AppStateModel, action: any) =>
  ({
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
    errorMessage: errorMessageReducer(state.errorMessage, action),
    routing: routerReducer(state.routing, action),
    loading: loadingReducer(state.loading, action),
    pageInfo: pageInfoReducer(state.pageInfo, action),
    selectedPost: selectedPostReducer(state.selectedPost, action),
    selectedPostComments: selectedPostCommentsReducer(state.selectedPostComments, action)
  } as AppStateModel);
