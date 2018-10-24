import { PostModel } from './PostModel';
import { UserModel } from './UserModel';

export class AppStateModel {
  public user: UserModel;
  public posts: PostModel[];
  public errorMessage: string;
  public routing: any;
  public loading: boolean;
}
