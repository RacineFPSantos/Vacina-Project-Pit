import React from 'react';
import { Formik } from 'formik';
import { Row, Col } from 'react-bootstrap';
import FormikControl from '../formikComponents/formikControl';

const patientDetailsForm = ({ modalData = {} }) => {
  const initialValues = {
    name: modalData.name,
    birthdate: modalData.birthdate,
    dateVaccine: modalData.dateVaccine,
    timeVaccine: modalData.timeVaccine,
    description: '',
    hasVaccinated: false,
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <div>
            <div className="mt-2 mb-2">
              <h5>Informações Pessoais</h5>
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
                  control="input"
                  type="text"
                  label="Nome"
                  name="birthdate"
                />
              </Col>
            </Row>

            <div className="mt-2 mb-2">
              <h5>Agendamento</h5>
            </div>
            <Row>
              <Col>
                <FormikControl
                  control="input"
                  type="text"
                  label="Nome"
                  name="dateVaccine"
                />
              </Col>
              <Col>
                <FormikControl
                  control="input"
                  type="text"
                  label="Nome"
                  name="timeVaccine"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikControl
                  control="textarea"
                  label="Observações"
                  name="description"
                />
              </Col>
            </Row>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default patientDetailsForm;
