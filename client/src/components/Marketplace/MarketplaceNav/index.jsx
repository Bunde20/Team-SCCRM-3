import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MarketplaceNav() {
  return (
    <Navbar expand="lg" className="justify-content-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
        <Nav className="text-center col-8 mx-auto">
          <Nav.Link className='col-lg-4 col-12 mx-auto' as={Link} to="/marketplace"><h4 className="paragraph-text text-white fs-1 text-lg-end">Buy</h4></Nav.Link>
          <Nav.Link className='col-lg-3 col-12 mx-auto' as={Link} to="/trade"><h4 className="paragraph-text text-white fs-1">Trade</h4></Nav.Link>
          <Nav.Link className='col-lg-4 col-12 mx-auto' as={Link} to="/mydeck"><h4 className="paragraph-text text-white fs-1 text-lg-start">My Deck</h4></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

