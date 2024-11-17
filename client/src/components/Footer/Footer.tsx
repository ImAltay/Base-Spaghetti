import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col>
                        <h2>About Us</h2>
                        <p>This is a generic React website template with footer and header etc. </p>
                    </Col>
                    <Col>
                        <h2>Contact Us</h2>
                        <p>Email: info@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </Col>
                    <Col>
                        <h2>Follow Us</h2>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;