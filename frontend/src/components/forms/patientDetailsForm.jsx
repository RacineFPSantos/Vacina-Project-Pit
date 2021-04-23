import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import FormikControl from '../formikComponents/formikControl';
import { PatientsListContext } from '../../context/patientsListContext';

import axios from '../../utils/api';
import { toastOptions } from '../../utils/toastOptions';
import { updateLocal, loadLocal } from '../../utils/localStorage';

const patientDetailsForm = ({ modalData = {}, onClose }) => {
  const { patientsList, setPatientsList } = useContext(PatientsListContext);

  const initialValues = {
    id: modalData.id,
    name: modalData.name,
    birthdate: modalData.birthdate,
    dateVaccine: modalData.dateVaccine,
    timeVaccine: modalData.timeVaccine,
    hasVaccinated: modalData.hasVaccinated,
    description: modalData.description,
  };

  const onSubmit = async (values) => {
    try {
      await axios.put(`/paciente/${values.id}`, { ...values });

      const newPatientList = patientsList.map((patient) =>
        patient.id === values.id ? { ...patient, ...values } : patient,
      );
      setPatientsList(newPatientList);
      updateLocal(values.dateVaccine, values);
    } catch (error) {
      if (error.message === 'Network Error') {
        updateLocal(values.dateVaccine, values);
        setPatientsList(loadLocal(values.dateVaccine));
        toast.error('Erro de conexão, usando versão local dos dados.', {
          ...toastOptions,
        });
      }
    }

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
