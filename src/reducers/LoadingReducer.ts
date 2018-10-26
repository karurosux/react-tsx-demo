import { ActionsEnum } from '../enums/ActionsEnum';

export const loadingReducer = (state: boolean, action: any) => {
  switch (action.type) {
    case ActionsEnum.LOADING_TRUE:
      return true;
    case ActionsEnum.LOADING_FALSE:
      return false;
    default:
      return state;
  }
};
