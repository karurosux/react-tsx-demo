import * as React from 'react';
import { connect } from 'react-redux';
import { CommentModel } from 'src/models/CommentModel';
import { PostCardPresentation } from 'src/presentations/post/post-card/PostCardPresentation';
import { AppStateModel } from '../../../models/AppStateModel';
import { PostModel } from '../../../models/PostModel';

interface IProps {
  post: PostModel;
  comments: CommentModel[];
}

const postContainer = class extends React.Component<IProps, any> {
  public render() {
    const { post } = this.props;
    return (
      <div className="post-detail">
        <PostCardPresentation title={post.title} body={post.body} />
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
    post: {} as PostModel,
    comments: []
  } as IProps);

const mapDispatchToProps = (dispatch: any) => ({} as IProps);

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(postContainer);
