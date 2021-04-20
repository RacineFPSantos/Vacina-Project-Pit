import React, { useState } from 'react';

const Patient = ({
  patient: { name, birthdate, dateVaccine, timeVaccine },
}) => (
  <>
    <tr>
      <td>{name}</td>
      <td className="td-center">{birthdate}</td>
      <td>{dateVaccine}</td>
      <td>{timeVaccine}</td>
      <td>
        <button type="button" onClick={() => {}}>
          Editar
        </button>
      </td>
    </tr>
  </>
);

export default Patient;
