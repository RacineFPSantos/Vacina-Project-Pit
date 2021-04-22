import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../../utils/api';

import FormikControl from '../formikComponents/formikControl';
import { formatDate, formatTime } from '../../utils/dateFormatter';
import validationSchema from '../../validation/agendarFormValidation';

import ConfirmationModal from '../modals/confirmationModal';

const index = () => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  // Time configuration
  const minTime = { minHour: 7, minMinutes: 0 };
  const maxTime = { maxHour: 16, maxMinutes: 30 };
  const timeIntervals = 30;

  // Toast Options
  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
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
    };

    setModalData(patient);

    try {
      await axios.post('/paciente', patient).catch((err) => {
        if (err.response.status === 409) {
          throw new Error(err.response.data.error);
        }
        throw err;
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
        validationSchema={validationSchema(minTime.minHour, maxTime.maxHour)}
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
                  minDate={null}
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
                  timeCaption="Horário"
                  timeIntervals={timeIntervals}
                  minTime={minTime}
                  maxTime={maxTime}
                />
              </Col>
            </Row>
            <button
              className="btn btn-primary btn-block btn-agendar"
              type="submit"
            >
              Agendar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default index;
