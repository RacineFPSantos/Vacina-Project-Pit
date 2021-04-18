import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import FormikControl from '../formikComponents/formikControl';
import axios from '../../utils/api';
import { formatDate, formatTime } from '../../utils/dateFormatter';

import Modal from '../modal';
import PatientModal from './patientModal';

const index = () => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

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
    const patient = {
      id: uuidv4(),
      name,
      birthdate: formatDate(birthdate),
      dateVaccine: formatDate(dateVaccine),
      timeVaccine: formatTime(timeVaccine),
    };

    setModalData(patient);
    try {
      await axios.post('/paciente', patient);
      setShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal show={show} setShow={setShow} title="Agendamento com sucesso">
        <PatientModal modalData={modalData} />
      </Modal>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
    </>
  );
};

export default index;
