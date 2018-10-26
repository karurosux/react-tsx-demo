import { ActionsEnum } from '../enums/ActionsEnum';

export const setLoading = (loading: boolean) => {
  if (loading) {
    return { type: ActionsEnum.LOADING_TRUE };
  } else {
    return { type: ActionsEnum.LOADING_FALSE };
  }
};
