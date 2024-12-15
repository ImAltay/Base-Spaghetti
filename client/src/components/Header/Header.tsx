import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false); 
  const [modalType, setModalType] = useState<'login' | 'signUp'>('login');

  const handleShow = (type: 'login' | 'signUp') => {
    setModalType(type);
    setShowModal(true);
  };

    const handleClose = () => setShowModal(false);

  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container >
        <Navbar.Brand href="#home">React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

        <Button variant="primary" className="me-2" onClick={()=>handleShow('login')}>Login</Button>
        <Button variant="secondary" onClick={()=>handleShow('signUp')}>Register</Button>
        </Navbar.Collapse> 
      </Container>
    </Navbar>

    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalType === 'login' ? 'Login' : 'Sign Up'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>

      </Modal>
      </>
  );
};

export default Header;