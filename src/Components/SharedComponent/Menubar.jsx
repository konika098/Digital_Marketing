import React from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import './Menubar.css'; 

const Menubar = () => {
  return (
    <div className="menubar__section">
      <Container>
        <Navbar expand="lg" bg="light">
          <Container fluid>
            <Navbar.Brand href="./index.html">
              <img className="img-fluid" src="./assets/images/logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mx-auto">
                <Nav.Link href="./index.html" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="./about">About us</Nav.Link>
                <Nav.Link href="./service">Our Services</Nav.Link>
                <Nav.Link href="./blog">Blog</Nav.Link>
                <Nav.Link href="./contact">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button href="./contact.html" variant="outline-primary" className="get-started-btn">
                  Get Started
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Menubar;
