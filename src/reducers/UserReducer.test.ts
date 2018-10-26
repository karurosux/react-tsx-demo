import { ActionsEnum } from '../enums/ActionsEnum';
import { UserModel } from '../models/UserModel';
import { userReducer } from './UserReducer';

(global as any).localStorage = {
  getItem(key: string) {},
  setItem(key: string, value: string) {}
};

describe('UserReducer', () => {
  it('should return the authenticated user.', () => {
    const result = userReducer({} as UserModel, {
      name: 'Carlos',
      type: ActionsEnum.SIGN_IN
    });
    expect(result.name).toBe('Carlos');
  });

  it('should return state as default.', () => {
    expect(userReducer({ name: 'Carlos' } as UserModel, {})).toEqual({ name: 'Carlos' });
  });

  it('should return empty object as default if no state.', () => {
    expect((userReducer as any)(undefined, {})).toEqual({});
  });
});
