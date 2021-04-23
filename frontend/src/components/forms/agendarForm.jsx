/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import axios from '../../utils/api';
import { formatDate, formatTime } from '../../utils/dateFormatter';
import FormikControl from '../formikComponents/formikControl';
import validationSchema from '../../validation/agendarFormValidation';
import ConfirmationModal from '../modals/confirmationModal';
import { toastOptions } from '../../utils/toastOptions';

const index = () => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  // Time configuration
  const timeConfig = {
    timeCaption: 'Horário',
    minTime: { minHour: 7, minMinutes: 0 },
    maxTime: { maxHour: 16, maxMinutes: 30 },
    timeIntervals: 30,
  };

  // Formik
  const initialValues = {
    name: '',
    birthdate: null,
    dateVaccine: null,
    timeVaccine: null,
  };

  const onSubmit = async ({ name, birthdate, dateVaccine, timeVaccine }) => {
    const patient = {
      id: uuidv4(),
      name,
      birthdate: formatDate(birthdate),
      dateVaccine: formatDate(dateVaccine),
      timeVaccine: formatTime(timeVaccine),
      hasVaccinated: false,
      description: '',
    };

    setModalData(patient);

    try {
      await axios.post('/paciente', patient).catch((err) => {
        if (err.message === 'Network Error') {
          throw new Error('Error de conexão');
        }

        if (err.response.status === 409) {
          throw new Error(err.response.data.message);
        }

        throw err.message;
      });
      setShow(true);
    } catch (err) {
      toast.error(err.message, { ...toastOptions });
    }
  };

  return (
    <div>
      <ConfirmationModal show={show} setShow={setShow} modalData={modalData} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(
          timeConfig.minTime.minHour,
          timeConfig.maxTime.maxHour,
        )}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="mt-3 mb-3">
              <h3>Informações Pessoais</h3>
            </div>

            <Row>
              <Col>
                <FormikControl
                  control="input"
                  type="text"
                  label="Nome"
                  name="name"
                />
              </Col>
              <Col>
                <FormikControl
                  control="date"
                  label="Data de nascimento"
                  name="birthdate"
                />
              </Col>
            </Row>

            <div className="mt-3 mb-3">
              <h3>Agendamento</h3>
            </div>
            <Row>
              <Col>
                <FormikControl
                  control="date"
                  label="Data Vacinação"
                  name="dateVaccine"
                  minDate={new Date()}
                />
              </Col>
              <Col>
                <FormikControl
                  control="time"
                  label="Hora"
                  name="timeVaccine"
                  timeConfig={timeConfig}
                />
              </Col>
            </Row>
            <Button className="btn-block btn-agendar" type="submit">
              Agendar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default index;
