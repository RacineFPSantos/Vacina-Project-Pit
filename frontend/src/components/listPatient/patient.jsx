import React from 'react';
import { calculateAge } from '../../utils/dateFormatter';

const Patient = ({
  patient: { id, name, birthdate, dateVaccine, timeVaccine },
  editPatient,
}) => {
  const firstAndLastName = (_name) => {
    const splitName = _name.split(' ');
    let formatedName = _name;

    if (splitName.length === 1) {
      return _name;
    }

    formatedName = `${splitName[0]} ${splitName[splitName.length - 1]}`;
    return formatedName;
  };

  return (
    <>
      <tr>
        <td>{firstAndLastName(name)}</td>
        <td className="td-center">{calculateAge(birthdate)}</td>
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
};

export default Patient;
