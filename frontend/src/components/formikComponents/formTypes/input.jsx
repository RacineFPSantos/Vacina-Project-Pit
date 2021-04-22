import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';
import TextError from '../../textError';

const Input = ({ label, name, ...props }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Field
      className="form-control"
      id={name}
      name={name}
      {...props}
      autoComplete="off"
    />
    <ErrorMessage name={name} component={TextError} />
  </Form.Group>
);

export default Input;
