import { Input } from '@material-ui/core';
import * as React from 'react';

export const EmailFieldPresentation = ({ label = 'Email' }) => (
  <Input placeholder={label} />
);
