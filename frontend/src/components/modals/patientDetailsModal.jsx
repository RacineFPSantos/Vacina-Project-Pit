import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import PatientDetailsForm from '../forms/patientDetailsForm';

const patientDetailsModal = ({ state: { show, setShow }, modalData = {} }) => {
  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>{modalData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PatientDetailsForm modalData={modalData} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default patientDetailsModal;
