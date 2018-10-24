import { push } from 'react-router-redux';
import { NavigateEnum } from '../enums/NavigateEnum';

export const navigateTo = (route: string) => {
  return (dispatch: any) => {
    dispatch(push({ pathname: route }));
    dispatch({
      type: NavigateEnum.NAVIGATE_TO,
      route
    });
  };
};
