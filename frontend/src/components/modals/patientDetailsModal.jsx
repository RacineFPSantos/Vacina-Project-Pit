import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const patientDetailsModal = ({ state: { show, setShow }, modalData = {} }) => {
  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h3>Nome: {modalData.name}</h3>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default patientDetailsModal;
