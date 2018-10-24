import { routerReducer } from 'react-router-redux';
import { AppStateModel } from 'src/models/AppStateModel';
import { errorMessageReducer } from './ErrorMessageReducer';
import { loadingReducer } from './LoadingReducer';
import { postsReducer } from './PostsReducer';
import { userReducer } from './UserReducer';

export const reducers = (state: AppStateModel = {} as AppStateModel, action: any) =>
  ({
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
    errorMessage: errorMessageReducer(state.errorMessage, action),
    routing: routerReducer(state.routing, action),
    loading: loadingReducer(state.loading, action)
  } as AppStateModel);
