import React from 'react';

import {
  formatDate,
  formatTime,
  calculateAge,
} from '../../utils/dateFormatter';

const Patient = ({ patient: { name, birthdate, dateVaccine } }) => (
  <tr key={name}>
    <td>{name}</td>
    <td className="td-center">
      {calculateAge(new Date(), new Date(birthdate))}
    </td>
    <td>{formatDate(new Date(dateVaccine))}</td>
    <td>{formatTime(new Date(dateVaccine))}</td>
    <td>
      <button type="button">Editar</button>
    </td>
  </tr>
);

export default Patient;
