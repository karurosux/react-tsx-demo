import { UserModel } from '../models/UserModel';

const KEY_USER = 'KEY_USER';

export class SessionSource {
  public static setSession(user: UserModel = {} as UserModel) {
    localStorage.setItem(KEY_USER, JSON.stringify(user));
  }

  public static getSession(): UserModel | void {
    const stored = localStorage.getItem(KEY_USER);
    if (!stored) {
      return;
    }

    return JSON.parse(stored) as UserModel;
  }
}
