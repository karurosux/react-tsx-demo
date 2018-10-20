import * as React from 'react';
import { SignInBoxPresentation } from 'src/presentations/auth/SignInBoxPresentation';

export class SignInContainer extends React.Component {
  public render() {
    return (
      <div className="sign-in-container">
        <SignInBoxPresentation />
      </div>
    );
  }
}
