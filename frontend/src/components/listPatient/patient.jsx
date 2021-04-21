import React from 'react';

const Patient = ({
  patient: { id, name, birthdate, dateVaccine, timeVaccine },
  editPatient,
}) => (
  <>
    <tr>
      <td>{name}</td>
      <td className="td-center">{birthdate}</td>
      <td>{dateVaccine}</td>
      <td>{timeVaccine}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            editPatient(id);
          }}
        >
          Editar
        </button>
      </td>
    </tr>
  </>
);

export default Patient;
