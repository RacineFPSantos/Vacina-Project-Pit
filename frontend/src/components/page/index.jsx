import React from 'react';
import { Container } from 'react-bootstrap';

const Page = ({ children }) => (
  <main>
    <Container className="h-100">{children}</Container>
  </main>
);

export default Page;
