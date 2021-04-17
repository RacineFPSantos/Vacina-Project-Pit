import React from 'react';

import Patient from './patient';

const index = ({ patientsList }) => (
  <div>
    {patientsList ? (
      <table id="customers">
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Data Vacina</th>
            <th>Horario Vacina</th>
            <th>Observações</th>
          </tr>
          {patientsList.map((patient) => (
            <Patient key={patient.name} patient={patient} />
          ))}
        </tbody>
      </table>
    ) : (
      <h1>Não existe ninguem agendado</h1>
    )}
  </div>
);

export default index;
