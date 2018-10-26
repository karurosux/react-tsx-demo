import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import * as thunk from 'redux-thunk';
import './App.css';
import { SignInContainer } from './containers/auth/sign-in/SignInContainer';
import { DashboardContainer } from './containers/layout/dashboard/DashboardContainer';
import { ProtectedRoutePresentation } from './presentations/shared/protected-route/ProtectedRoutePresentation';
import { reducers } from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const history = createBrowserHistory();
const routingMiddlewareInstance = routerMiddleware(history);
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk.default, routingMiddlewareInstance)
);
const persistor = persistStore(store);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <Switch>
                <Route exact={true} path="/" component={SignInContainer} />
                <ProtectedRoutePresentation
                  exact={false}
                  path="/dashboard"
                  redirectTo="/"
                  component={DashboardContainer}
                />
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
