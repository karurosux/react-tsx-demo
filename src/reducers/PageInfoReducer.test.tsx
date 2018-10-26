import { ActionsEnum } from '../enums/ActionsEnum';
import { PageInfoModel } from '../models/PageInfoModel';
import { pageInfoReducer } from './PageInfoReducer';

describe('PageInfoReducer', () => {
  it('should return page info that is being setted.', () => {
    const pageInfo = {
      title: 'Hola',
      data: ''
    };
    const result = pageInfoReducer({} as PageInfoModel, {
      type: ActionsEnum.SET_PAGE_INFO,
      ...pageInfo
    });
    expect(result).toHaveProperty('title', 'Hola');
  });
});
