import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../formikComponents/formikControl';
import axios from '../../utils/api';
import { formatDateForDatabase } from '../../utils/dateFormatter';

const index = () => {
  // Time configuration
  const minTime = { minHour: 7, minMinutes: 0 };
  const maxTime = { maxHour: 16, maxMinutes: 30 };
  const timeIntervals = 30;

  // Formik
  const initialValues = {
    name: '',
    birthdate: null,
    dateVaccine: null,
    timeVaccine: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Preencha esse dado.'),
    birthdate: Yup.date().required('Preencha esse dado.').nullable(),
    dateVaccine: Yup.date().required('Preencha esse dado.').nullable(),
    timeVaccine: Yup.string().required('Preencha esse dado.').nullable(),
  });

  const onSubmit = async ({ name, birthdate, dateVaccine, timeVaccine }) => {
    const pacient = {
      name,
      birthdate,
      dateVaccine: formatDateForDatabase(dateVaccine, timeVaccine),
    };

    try {
      await axios.post('/paciente', pacient);
      // tell de user that the scheduling work perfect
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl control="input" type="text" label="Nome" name="name" />

          <FormikControl
            control="date"
            label="Data de nascimento"
            name="birthdate"
            minDate={null}
          />

          <FormikControl
            control="date"
            label="Data Vacinação"
            name="dateVaccine"
            minDate={new Date()}
          />

          <FormikControl
            control="time"
            label="Hora"
            name="timeVaccine"
            timeCaption="Horário"
            timeIntervals={timeIntervals}
            minTime={minTime}
            maxTime={maxTime}
          />

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default index;
