import { TextField } from '@material-ui/core';
import * as React from 'react';

const handleChange = (onChange: (e: any) => void) => (e: any) => {
  if (onChange) {
    onChange(e);
  }
};

export const EmailFieldPresentation = ({
  label = 'Email',
  onChange = (e: any) => {},
  required = false
}) => (
  <TextField
    type="email"
    label={label}
    name="email"
    fullWidth={true}
    required={required}
    onChange={handleChange(onChange)}
  />
);
