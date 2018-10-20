import { Button, Card, Typography } from '@material-ui/core';
import * as React from 'react';
import { EmailFieldPresentation } from '../../fields/email-field/EmailFieldPresentation';
import './SignInBoxPresentation.scss';

const values = {};

const handleSubmit = (onSubmit: (e: any) => void) => (event: any): void => {
  if (onSubmit) {
    onSubmit({ values, event });
  }
};

const handleInputChange = (name: string) => (e: any) => {
  values[name] = e.target.value;
};

export const SignInBoxPresentation = ({ onSubmit = (e: any) => {} }) => (
  <Card className="sign-in-box">
    <Typography className="message">
      Use <b>Sincere@april.biz</b> email for login.{' '}
    </Typography>

    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailFieldPresentation required={true} onChange={handleInputChange('email')} />

      <Button
        className="sign-in-button"
        variant="contained"
        color="primary"
        fullWidth={true}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  </Card>
);
