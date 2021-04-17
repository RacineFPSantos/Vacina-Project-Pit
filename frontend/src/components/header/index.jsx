import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Navbar bg="light">
      <Link to="/">
        <Navbar.Brand>#VacinaSIM</Navbar.Brand>
      </Link>
    </Navbar>
  </header>
);

export default Header;
