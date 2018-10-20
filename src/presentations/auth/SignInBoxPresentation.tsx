import { Card } from '@material-ui/core';
import * as React from 'react';
import { EmailFieldPresentation } from '../fields/EmailFieldPresentation';
import './SignInBoxPresentation.scss';

export const SignInBoxPresentation = ({}) => (
  <Card className="sign-in-box">
    <EmailFieldPresentation />
  </Card>
);
