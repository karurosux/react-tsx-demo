import * as React from 'react';
import './App.css';
import { SignInContainer } from './containers/auth/SignInContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SignInContainer />
      </div>
    );
  }
}

export default App;
