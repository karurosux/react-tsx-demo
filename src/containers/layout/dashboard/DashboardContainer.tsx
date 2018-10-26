import { Divider } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { setPageInfoAction } from '../../../actions/PageInfoActions';
import { PostContainer } from '../../../containers/module/post/PostContainer';
import { AppStateModel } from '../../../models/AppStateModel';
import { MenuItemModel } from '../../../models/MenuItemModel';
import { PageInfoModel } from '../../../models/PageInfoModel';
import { PostModel } from '../../../models/PostModel';
import { MenuItemsPresentation } from '../../../presentations/menu-items/MenuItemsPresentation';
import { HomeContainer } from '../../module/home/HomeContainer';
import './DashboardContainer.scss';

interface IProps {
  pageInfo: PageInfoModel;
  posts: PostModel[];
  setPageInfo: (title: string) => void;
}

const menuItems = [
  {
    text: 'Home',
    route: '/dashboard'
  }
] as MenuItemModel[];

const dashboardContainer = class extends React.Component<IProps, any> {
  public relateComponentToPageInfo(component: any, title: string) {
    if (this.props.pageInfo.title !== title) {
      this.props.setPageInfo(title);
    }
    return component;
  }

  public render() {
    return (
      <div className="dashboard-container">
        <div className="drawer">
          <div className="drawer-head">&nbsp;</div>
          <Divider />
          <MenuItemsPresentation menuItems={menuItems} />
        </div>
        <div className="drawer-content">
          <div className="toolbar">
            <h1 className="toolbar-title"> {this.props.pageInfo.title} </h1>
          </div>
          <div className="content">
            <Switch>
              <Route exact={true} path="/dashboard" component={HomeContainer} />
              <Route exact={true} path="/dashboard/post" component={PostContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: any) =>
  ({
    setPageInfo(title: string) {
      dispatch(
        setPageInfoAction({
          title,
          data: {}
        })
      );
    }
  } as IProps);

const mapStateToProps = (state: AppStateModel) =>
  ({
    posts: state.posts || [],
    pageInfo: state.pageInfo || { title: 'Title' }
  } as IProps);

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboardContainer);
