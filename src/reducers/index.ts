import { combineReducers, ReducersMapObject } from 'redux';
import { AppStateModel } from 'src/models/AppStateModel';
import { errorMessageReducer } from './ErrorMessageReducer';
import { userReducer } from './UserReducer';

const appStateModel: ReducersMapObject<AppStateModel> = {
  user: userReducer,
  errorMessage: errorMessageReducer
};

export const reducers = combineReducers<AppStateModel>(appStateModel);
