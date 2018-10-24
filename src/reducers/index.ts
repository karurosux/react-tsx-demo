import { routerReducer } from 'react-router-redux';
import { AppStateModel } from 'src/models/AppStateModel';
import { errorMessageReducer } from './ErrorMessageReducer';
import { userReducer } from './UserReducer';

export const reducers = (
  state: AppStateModel = {} as AppStateModel,
  action: any
) =>
  ({
    user: userReducer(state.user, action),
    errorMessage: errorMessageReducer(state.errorMessage, action),
    routing: routerReducer(state.routing, action)
  } as AppStateModel);
