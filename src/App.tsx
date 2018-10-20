import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import * as thunk from 'redux-thunk';
import { SignInContainer } from './containers/auth/sign-in/SignInContainer';
import { reducers } from './reducers';

import './App.css';

const store = createStore(reducers, applyMiddleware(thunk.default));

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider store={store}>
          <SignInContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
