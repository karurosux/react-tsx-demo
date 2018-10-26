import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, openPostAction } from '../../../actions/PostsActions';
import { AppStateModel } from '../../../models/AppStateModel';
import { PostModel } from '../../../models/PostModel';
import { PostsListPresentation } from '../../../presentations/post/posts-list/PostsListPresentation';

interface IProps {
  posts: PostModel[];
  fetchPosts: () => void;
  openPost: (post: PostModel) => void;
}

const homeContainer = class extends React.Component<IProps, any> {
  public componentWillMount() {
    this.props.fetchPosts();
  }

  public render() {
    return (
      <div className="home-container">
        <PostsListPresentation onItemClick={this.handlePostClick()} posts={this.props.posts} />
      </div>
    );
  }

  public handlePostClick() {
    return (post: PostModel) => {
      this.props.openPost(post);
    };
  }
};

const mapStateToProps = (props: AppStateModel) =>
  ({
    posts: props.posts
  } as IProps);

const mapDispatchToProps = (dispatch: any) =>
  ({
    fetchPosts() {
      dispatch(fetchPosts());
    },
    openPost(post: PostModel) {
      dispatch(openPostAction(post));
    }
  } as IProps);

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(homeContainer);
