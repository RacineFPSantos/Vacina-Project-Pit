import React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import Page from '../components/page';

function Index({ history }) {
  return (
    <Page>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <ButtonGroup size="lg" className="mr-5">
          <Button
            variant="primary"
            className="btn-home mr-2"
            onClick={() => history.push('/agendar')}
          >
            Agendamento
          </Button>
          <Button
            variant="secondary"
            className="btn-home"
            onClick={() => history.push('/listaagendados')}
          >
            Enfermeiro
          </Button>
        </ButtonGroup>
      </Container>
    </Page>
  );
}

export default Index;
