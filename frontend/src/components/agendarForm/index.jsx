import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from '../formikComponents/formikControl';

const index = () => (
  <Formik>
    <Form>
      <FormikControl control="input" type="text" label="Nome" name="name" />

      <FormikControl
        control="date"
        label="Data de nascimento"
        name="birthdate"
        minDate={null}
      />

      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default index;
