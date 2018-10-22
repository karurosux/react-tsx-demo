import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';
import { SignInContainer } from './containers/auth/sign-in/SignInContainer';
import { DashboardContainer } from './containers/layout/dashboard/DashboardContainer';
import { reducers } from './reducers';

import './App.css';
import { ProtectedRoutePresentation } from './presentations/shared/protected-route/ProtectedRoutePresentation';

const store = createStore(reducers, applyMiddleware(thunk.default));

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={SignInContainer} />
              <ProtectedRoutePresentation
                exact={true}
                path="/dashboard"
                redirectTo="/"
                component={DashboardContainer}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
