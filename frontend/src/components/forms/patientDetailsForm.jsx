import React from 'react';
import { Formik, Form } from 'formik';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import FormikControl from '../formikComponents/formikControl';

import axios from '../../utils/api';

const patientDetailsForm = ({ modalData = {}, onClose }) => {
  const initialValues = {
    id: modalData.id,
    name: modalData.name,
    birthdate: modalData.birthdate,
    dateVaccine: modalData.dateVaccine,
    timeVaccine: modalData.timeVaccine,
    description: '',
    hasVaccinated: false,
  };

  const onSubmit = async (values) => {
    const res = await axios.put(`/paciente/${values.id}`, { ...values });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
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
                  label="Data de nascimento"
                  name="birthdate"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikControl
                  control="input"
                  type="text"
                  label="data da vacina"
                  name="dateVaccine"
                />
              </Col>
              <Col>
                <FormikControl
                  control="input"
                  type="text"
                  label="horário da vacina"
                  name="timeVaccine"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikControl
                  control="checkbox"
                  label="Vacinado"
                  name="hasVaccinated"
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
            <Row>
              <Col>
                <ButtonGroup className="float-right btn-block">
                  <Button variant="secondary" onClick={() => onClose()}>
                    Fechar
                  </Button>
                  <Button type="submit" variant="primary" className="ml-2">
                    Salvar
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default patientDetailsForm;
