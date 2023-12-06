import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MarketplaceNav() {
  return (
    <Navbar expand="lg" className="justify-content-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className=" d-flex justify-content-center" as={Link} to="/marketplace"><h4 className="text-dark">Buy</h4></Nav.Link>
          <Nav.Link className=" d-flex justify-content-center" as={Link} to="/trade"><h4 className="text-dark">Trade</h4></Nav.Link>
          <Nav.Link className=" d-flex justify-content-center" as={Link} to="/mydeck"><h4 className="text-dark">My Deck</h4></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

