import React, { useState, useContext } from 'react';
import { Table } from 'react-bootstrap';

import { PatientsListContext } from '../../context/patientsListContext';

import Patient from './patient';
import PatientDetailsModal from '../modals/patientDetailsModal';

const index = () => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();
  const { patientsList } = useContext(PatientsListContext);

  const editPatient = (_id) => {
    const patient = patientsList.find((_patient) => _patient.id === _id);
    setModalData(patient);
    setShow(true);
  };

  return (
    <>
      <PatientDetailsModal state={{ show, setShow }} modalData={modalData} />
      {patientsList.length > 0 ? (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Data Vacina</th>
              <th>Horario Vacina</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {patientsList.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                editPatient={editPatient}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center mt-4">
          <h1>Não existe ninguem agendado</h1>
        </div>
      )}
    </>
  );
};

export default index;
