import React from 'react';
import { Container } from 'react-bootstrap';
import Page from '../../components/page';
import Form from '../../components/forms/agendarForm';

const Index = () => (
  <Page>
    <Container className="h-100 d-flex justify-content-center mt-5">
      <Form />
    </Container>
  </Page>
);

export default Index;
