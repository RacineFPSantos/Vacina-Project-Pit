import React from 'react';
import { Container } from 'react-bootstrap';
import Page from '../../components/page';

import Form from '../../components/agendarForm';

const index = () => (
  <Page>
    <Container className="h-100 d-flex justify-content-center mt-5">
      <Form />
    </Container>
  </Page>
);

export default index;
