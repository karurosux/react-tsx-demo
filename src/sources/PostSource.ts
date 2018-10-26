import { HttpRequest } from './HttpRequest';

export class PostSource {
  public static fetchPosts(userId: number) {
    return HttpRequest.fetch(`/posts?userId=${userId}`, { method: 'GET' }).then(res => res.json());
  }

  public static fetchPostComments(postId: number) {
    return HttpRequest.fetch(`/posts/${postId}/comments`, {
      method: 'GET'
    }).then(res => res.json());
  }
}
