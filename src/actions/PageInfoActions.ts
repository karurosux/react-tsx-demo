import { ActionsEnum } from '../enums/ActionsEnum';
import { PageInfoModel } from '../models/PageInfoModel';

export const setPageInfoAction = (pageInfo: PageInfoModel) => {
  return {
    type: ActionsEnum.SET_PAGE_INFO,
    ...pageInfo
  };
};
