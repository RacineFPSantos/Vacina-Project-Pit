import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const index = ({ show, setShow, title, children }) => (
  <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={() => setShow(false)}>
        Fechar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default index;
