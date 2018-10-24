import { LoadingEnum } from '../enums/LoadingEnum';
import { loadingReducer } from './LoadingReducer';

describe('LoadingReducer', () => {
  it('should set loading on.', () => {
    const result = loadingReducer(false, { type: LoadingEnum.TRUE });
    expect(result).toBeTruthy();
  });

  it('should set loading off.', () => {
    const result = loadingReducer(true, { type: LoadingEnum.FALSE });
    expect(result).toBeFalsy();
  });

  it('should return same state on wrong type.', () => {
    expect(loadingReducer(true, {})).toBeTruthy();
  });
});
