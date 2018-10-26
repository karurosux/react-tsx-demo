import * as React from 'react';
import { connect } from 'react-redux';
import { signInAction } from '../../../actions/AuthActions';
import { SignInBoxPresentation } from '../../../presentations/auth/sign-in-box/SignInBoxPresentation';
import './SignInContainer.scss';

interface IProps {
  errorMessage: string;
  signIn: (email: string) => void;
}

const signIn = (props: IProps) => (e: any) => {
  e.event.preventDefault();
  props.signIn(e.values.email);
};

const signInContainer = (props: IProps) => {
  return (
    <div className="sign-in-container">
      <div className="box-container">
        <SignInBoxPresentation errorMessage={props.errorMessage} onSubmit={signIn(props)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) =>
  ({
    errorMessage: state.errorMessage
  } as IProps);

const mapDispatchToProps = (dispatch: any) =>
  ({
    signIn(email: string) {
      dispatch(signInAction(email));
    }
  } as IProps);

export const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(signInContainer);
