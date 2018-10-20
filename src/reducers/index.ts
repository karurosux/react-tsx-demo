import { combineReducers, ReducersMapObject } from 'redux';
import { AppStateModel } from 'src/models/AppStateModel';
import { userReducer } from './UserReducer';

const appStateModel: ReducersMapObject<AppStateModel> = {
  user: userReducer
};

export const reducers = combineReducers<AppStateModel>(appStateModel);
