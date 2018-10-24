import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/PostsActions';
import { AppStateModel } from '../../../models/AppStateModel';
import './DashboardContainer.scss';

const dashboardContainer = class extends React.Component<any, any> {
  public componentWillMount() {
    this.props.fetchPosts();
  }

  public render() {
    return (
      <div className="dashboard-container">
        <div className="drawer">
          <div className="drawer-head">&nbsp;</div>
        </div>
        <div className="content">
          <div className="toolbar">
            <h1 className="toolbar-title"> Hola </h1>
            {this.props.posts.map((i: any) => (
              <p>
                {i.title}: {i.body}
              </p>
            ))}
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
