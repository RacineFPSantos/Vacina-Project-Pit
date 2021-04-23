import React from 'react';
import { Button } from 'react-bootstrap';
import { calculateAge } from '../../utils/dateFormatter';

const Patient = ({
  patient: { id, name, birthdate, dateVaccine, timeVaccine, hasVaccinated },
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
        <td>{hasVaccinated ? 'Sim' : 'Não'}</td>
        <td>
          <Button
            type="button"
            variant="info"
            onClick={() => {
              editPatient(id);
            }}
          >
            Editar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Patient;
