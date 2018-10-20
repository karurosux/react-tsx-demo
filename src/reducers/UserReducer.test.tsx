import { AuthEnum } from '../enums/AuthEnum';
import { UserModel } from '../models/UserModel';
import { userReducer } from './UserReducer';

describe('UserReducer', () => {
  it('should return the authenticated user.', () => {
    const result = userReducer({} as UserModel, {
      name: 'Carlos',
      type: AuthEnum.SIGN_IN
    });
    expect(result.name).toBe('Carlos');
  });
});
