import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ height: "100px" }} className="bg-secondary mt-4 py-3 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-center">&copy; 2024 Companies Office of Jamaica. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-right">
            <p>Follow us on social media</p>
            {/* Add social media icons/links here */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
