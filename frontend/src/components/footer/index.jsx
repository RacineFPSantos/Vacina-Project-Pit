import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer>
    <Container fluid className="text-center">
      &copy; {new Date().getFullYear()} Copyright:
      <a href="https://www.linkedin.com/in/racine-santos/"> Racine Santos </a>
    </Container>
  </footer>
);

export default Footer;
