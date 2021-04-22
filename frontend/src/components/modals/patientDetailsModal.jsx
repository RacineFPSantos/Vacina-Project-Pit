import React from 'react';
import { Modal } from 'react-bootstrap';

import PatientDetailsForm from '../forms/patientDetailsForm';

const patientDetailsModal = ({ state: { show, setShow }, modalData = {} }) => {
  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>Paciente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PatientDetailsForm modalData={modalData} onClose={onClose} />
      </Modal.Body>
    </Modal>
  );
};

export default patientDetailsModal;
