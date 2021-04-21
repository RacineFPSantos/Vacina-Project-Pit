import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';
import TextError from '../../textError';

const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field
        className="form-control"
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  );
};

export default TextArea;
