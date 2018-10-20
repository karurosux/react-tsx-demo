import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SignInBoxPresentation } from './SignInBoxPresentation';

it('sign in box should render component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInBoxPresentation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
