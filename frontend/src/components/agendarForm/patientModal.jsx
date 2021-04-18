import React from 'react';

const patientModal = ({
  modalData: { name, birthdate, dateVaccine, timeVaccine },
}) => (
  <div>
    <h3>{`Nome: ${name}`}</h3>
    <span>{birthdate.toString()}</span>
    <br />
    <span>{dateVaccine.toString()}</span>
    <span>{timeVaccine.toString()}</span>
  </div>
);

export default patientModal;
