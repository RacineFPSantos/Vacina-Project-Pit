import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from '../formikComponents/formikControl';

const index = () => (
  <Formik>
    <Form>
      <FormikControl control="input" type="text" label="Nome" name="name" />
    </Form>
  </Formik>
);

export default index;
