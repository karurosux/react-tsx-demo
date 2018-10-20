import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EmailFieldPresentation } from './EmailFieldPresentation';

it('Email field should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailFieldPresentation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
