import * as _ from 'lodash';
import * as React from 'react';
import { PostModel } from '../../../models/PostModel';
import { PostCardPresentation } from '../post-card/PostCardPresentation';

interface IProps {
  posts: PostModel[];
  onItemClick?: (id: PostModel) => void;
}

const handleItemClick = (onClick: any) => (posts: PostModel[]) => (id: number) =>
  onClick(_.find(posts, { id }));

export const PostsListPresentation = (props: IProps) => (
  <div className="posts-container">
    {props.posts.length === 0 ? (
      <p className="no-posts-message">No posts</p>
    ) : (
      props.posts.map((post: PostModel) => (
        <PostCardPresentation
          onClick={handleItemClick(props.onItemClick)(props.posts)}
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))
    )}
  </div>
);

(PostsListPresentation as any).defaultProps = {
  posts: [],
  onItemClick: (id: PostModel) => {}
} as IProps;
