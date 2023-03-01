import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingBasket } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';

function Navy() {
  return (
    <div>
      
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{color: 'red', fontWeight: 'bold'}} href="#home"><FaShoppingBasket /> Xclusive Stores</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: 'red', fontWeight: 'bold'}} href="#home">COLLECTIONS</Nav.Link>
            <Nav.Link style={{color: 'red', fontWeight: 'bold'}} href="#link">BRAND</Nav.Link>
            <NavDropdown title={<FaUserCheck />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item style={{color: 'black', fontWeight: 'bold'}}  href="#action/3.2">
                Sign Up
              </NavDropdown.Item>
  
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    

    </Navbar>
    </div>
  )
}

export default Navy