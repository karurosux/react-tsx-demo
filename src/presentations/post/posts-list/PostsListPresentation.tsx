import * as React from 'react';
import { PostModel } from '../../../models/PostModel';
import { PostCardPresentation } from '../post-card/PostCardPresentation';

interface IProps {
  posts: PostModel[];
}

export const PostsListPresentation = (props: IProps) => (
  <div className="posts-container">
    {props.posts.length === 0 ? (
      <p className="no-posts-message">No posts</p>
    ) : (
      props.posts.map((post: PostModel) => (
        <PostCardPresentation key={post.id} title={post.title} body={post.body} />
      ))
    )}
  </div>
);

(PostsListPresentation as any).defaultProps = {
  posts: []
} as IProps;
