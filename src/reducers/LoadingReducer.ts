import { LoadingEnum } from '../enums/LoadingEnum';

export const loadingReducer = (state: boolean, action: any) => {
  switch (action.type) {
    case LoadingEnum.TRUE:
      return true;
    case LoadingEnum.FALSE:
      return false;
    default:
      return state;
  }
};
