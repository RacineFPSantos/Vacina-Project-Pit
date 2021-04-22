import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';
import TextError from '../../textError';

const Checkbox = ({ label, name, ...props }) => (
  <div>
    <Form.Group>
      <Field
        as={Form.Check}
        type="checkbox"
        label={label}
        name={name}
        {...props}
      />
      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  </div>
);

export default Checkbox;
