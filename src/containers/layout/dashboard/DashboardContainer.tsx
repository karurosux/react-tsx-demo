import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { fetchPosts } from '../../../actions/PostsActions';
import { AppStateModel } from '../../../models/AppStateModel';
import { PostModel } from '../../../models/PostModel';
import { HomeContainer } from '../../module/home/HomeContainer';
import './DashboardContainer.scss';

interface IProps {
  posts: PostModel[];
  fetchPosts: () => void;
}

const dashboardContainer = class extends React.Component<IProps, any> {
  public componentWillMount() {
    this.props.fetchPosts();
  }

  public render() {
    return (
      <div className="dashboard-container">
        <div className="drawer">
          <div className="drawer-head">&nbsp;</div>
        </div>
        <div className="drawer-content">
          <div className="toolbar">
            <h1 className="toolbar-title"> Title </h1>
          </div>
          <div className="content">
            <Switch>
              <Route path="/" component={HomeContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchPosts() {
    dispatch(fetchPosts());
  }
});

const mapStateToProps = (state: AppStateModel) => ({
  posts: state.posts || []
});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboardContainer);
