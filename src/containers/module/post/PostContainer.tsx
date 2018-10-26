import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateModel } from '../../../models/AppStateModel';
import { CommentModel } from '../../../models/CommentModel';
import { PostModel } from '../../../models/PostModel';
import { PostCardPresentation } from '../../../presentations/post/post-card/PostCardPresentation';

interface IProps {
  post: PostModel;
  comments: CommentModel[];
}

const postContainer = class extends React.Component<IProps, any> {
  public render() {
    const { post, comments } = this.props;
    return (
      <div className="post-detail">
        <PostCardPresentation title={post.title} body={post.body} />
        <ul className="comments">
          {comments.map(c => (
            <li>
              <b>
                {c.name}({c.email}
              </b>
              ): {c.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

(postContainer as any).defaultProps = {
  post: {},
  comments: []
};

const mapStateToProps = (state: AppStateModel) =>
  ({
    post: state.selectedPost,
    comments: state.selectedPostComments
  } as IProps);

const mapDispatchToProps = (dispatch: any) => ({} as IProps);

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(postContainer);
