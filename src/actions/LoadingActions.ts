import { LoadingEnum } from '../enums/LoadingEnum';

export const setLoading = (loading: boolean) => {
  if (loading) {
    return { type: LoadingEnum.TRUE };
  } else {
    return { type: LoadingEnum.FALSE };
  }
};
