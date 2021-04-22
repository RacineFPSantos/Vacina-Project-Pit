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
    hasVaccinated: modalData.hasVaccinated,
    description: '',
  };

  const onSubmit = async (values) => {
    const res = await axios.put(`/paciente`, { ...values });
    console.log(res);
    onClose();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <Row>
              <Col>Nome: {formik.values.name}</Col>
            </Row>
            <Row>
              <Col>Data de Nascimento: {formik.values.birthdate}</Col>
            </Row>
            <Row>
              <Col>Data da vacinação: {formik.values.dateVaccine}</Col>
            </Row>
            <Row>
              <Col>Horario: {formik.values.timeVaccine}</Col>
            </Row>
            <Row>
              <Col className="mt-2 d-flex align-items-center">
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
