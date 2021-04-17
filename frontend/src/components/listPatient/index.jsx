import React from 'react';
import { Table } from 'react-bootstrap';

import Patient from './patient';

const index = ({ patientsList = [] }) => (
  <>
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
            <Patient key={patient.name} patient={patient} />
          ))}
        </tbody>
      </Table>
    ) : (
      <h1>Não existe ninguem agendado</h1>
    )}
  </>
);

export default index;
