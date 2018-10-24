import { ErrorMessageEnum } from '../enums/ErrorMessageEnum';
import { errorMessageReducer } from './ErrorMessageReducer';

describe('ErrorMessageReducere', () => {
  it('should return email not found error.', () => {
    expect(
      errorMessageReducer('', { type: ErrorMessageEnum.EMAIL_NOT_FOUND, message: 'message' })
    ).toBe('message');
  });

  it('should return unauthenticated error.', () => {
    expect(
      errorMessageReducer('', { type: ErrorMessageEnum.UNAUTHENTICATED, message: 'message' })
    ).toBe('message');
  });

  it('should return blank as default if no state.', () => {
    expect((errorMessageReducer as any)(undefined, {})).toBe('');
  });

  it('should return state if wrong key.', () => {
    expect(errorMessageReducer('state', {})).toBe('state');
  });
});
