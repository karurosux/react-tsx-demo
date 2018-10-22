// import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import { NavigateEnum } from '../enums/NavigateEnum';

export const navigateTo = (route: string) => {
  return (dispatch: any) => {
    // const FakeEl = withRouter(class Dummy extends React.Component {});

    // const instance = <FakeEl />;

    // console.log(instance);

    dispatch({
      type: NavigateEnum.NAVIGATE_TO,
      route
    });
  };
};
