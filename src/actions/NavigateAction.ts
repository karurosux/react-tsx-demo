import { push } from 'react-router-redux';
import { ActionsEnum } from '../enums/ActionsEnum';

export const navigateTo = (route: string) => {
  return (dispatch: any) => {
    dispatch(push({ pathname: route }));
    dispatch({
      type: ActionsEnum.NAVIGATE_TO,
      route
    });
  };
};
