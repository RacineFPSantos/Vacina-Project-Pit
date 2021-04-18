import React from 'react';

const Patient = ({
  patient: { name, birthdate, dateVaccine, timeVaccine },
}) => (
  <tr>
    <td>{name}</td>
    <td className="td-center">{birthdate}</td>
    <td>{dateVaccine}</td>
    <td>{timeVaccine}</td>
    <td>
      <button type="button">Editar</button>
    </td>
  </tr>
);

export default Patient;
