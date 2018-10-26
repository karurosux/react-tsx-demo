import { ActionsEnum } from '../enums/ActionsEnum';
import { PageInfoModel } from '../models/PageInfoModel';

export const pageInfoReducer = (state: PageInfoModel, action: any) => {
  switch (action.type) {
    case ActionsEnum.SET_PAGE_INFO:
      return {
        title: action.title,
        data: action.data
      };
    default:
      return state || { title: 'Title', data: {} };
  }
};
