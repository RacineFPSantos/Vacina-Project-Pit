import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const confirmationModal = ({
  show,
  setShow,
  title,
  modalData: { name, birthdate, dateVaccine, timeVaccine },
}) => {
  const history = useHistory();
  const onClose = () => {
    setShow(false);
    history.push('/');
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h3>{`Nome: ${name}`}</h3>
          <span>{birthdate}</span>
          <br />
          <span>{dateVaccine}</span>
          <span>{timeVaccine}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default confirmationModal;
