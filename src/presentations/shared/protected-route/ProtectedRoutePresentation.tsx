import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const renderComponent = (Component: any, redirectTo: string, user: any) => (props: any) =>
  !_.isEmpty(Component) ? <Component {...props} /> : <Redirect to={redirectTo || '/login'} />;

const protectedRoutePresentation = (props: any) => {
  const { component, redirectTo, user, ...rest } = props;
  return <Route {...rest} render={renderComponent(component, redirectTo, user)} />;
};

export const ProtectedRoutePresentation = connect(
  (state: any) => ({
    user: state.user
  }),
  (dispatch: any) => ({})
)(protectedRoutePresentation);
