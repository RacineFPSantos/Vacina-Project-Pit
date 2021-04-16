import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../textError';

const Input = ({ label, name, ...props }) => (
  <div className="form-control">
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...props} />
    <ErrorMessage name={name} component={TextError} />
  </div>
);

export default Input;
