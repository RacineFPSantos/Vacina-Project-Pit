import React from 'react';

import Patient from './patient';

const index = ({ patientList }) => (
  <table id="customers">
    <tr>
      <th>Nome</th>
      <th>Idade</th>
      <th>Data Vacina</th>
      <th>Horario Vacina</th>
      <th>Observações</th>
    </tr>
    {patientList ? (
      patientList.map((patient) => <Patient patient={patient} />)
    ) : (
      <h1>Não existe ninguem agendado</h1>
    )}
  </table>
);

export default index;
