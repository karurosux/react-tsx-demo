import { ActionsEnum } from '../enums/ActionsEnum';
import { loadingReducer } from './LoadingReducer';

describe('LoadingReducer', () => {
  it('should set loading on.', () => {
    const result = loadingReducer(false, { type: ActionsEnum.LOADING_TRUE });
    expect(result).toBeTruthy();
  });

  it('should set loading off.', () => {
    const result = loadingReducer(true, { type: ActionsEnum.LOADING_FALSE });
    expect(result).toBeFalsy();
  });

  it('should return same state on wrong type.', () => {
    expect(loadingReducer(true, {})).toBeTruthy();
  });
});
