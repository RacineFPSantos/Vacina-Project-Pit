import React from 'react';
import { Table } from 'react-bootstrap';

import Patient from './patient';

const index = ({ currentList = [] }) => (
  <>
    {currentList.length > 0 ? (
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
          {currentList.map((patient) => (
            <Patient key={patient.id} patient={patient} />
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

export default index;
