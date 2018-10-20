import { HttpRequest } from './HttpRequest';

export class AuthSource {
  public static signIn(email: string) {
    return HttpRequest.fetch(`/users?email=${email}`).then(this.mapToUserModel.bind(this));
  }

  private static mapToUserModel(res: any) {
    return res;
  }
}
