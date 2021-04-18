import React from 'react';

const patientModal = ({ patient: { name, birthdate, dateVaccine } }) => (
  <div>
    <h3>{`Nome: ${name}`}</h3>
    <span>{birthdate.toString()}</span>
    <br />
    <span>{dateVaccine.toString()}</span>
  </div>
);

export default patientModal;
