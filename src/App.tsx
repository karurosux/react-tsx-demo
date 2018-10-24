import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';
import './App.css';
import { SignInContainer } from './containers/auth/sign-in/SignInContainer';
import { DashboardContainer } from './containers/layout/dashboard/DashboardContainer';
import { ProtectedRoutePresentation } from './presentations/shared/protected-route/ProtectedRoutePresentation';
import { reducers } from './reducers';

const history = createBrowserHistory();
const routingMiddlewareInstance = routerMiddleware(history);
const store = createStore(
  reducers,
  applyMiddleware(thunk.default, routingMiddlewareInstance)
);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact={true} path="/" component={SignInContainer} />
              <ProtectedRoutePresentation
                exact={true}
                path="/dashboard"
                redirectTo="/"
                component={DashboardContainer}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
