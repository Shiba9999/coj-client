import React from 'react';
import { Form, Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';

const FormComponent = () => {
  return (
    <Container>
      <h2 className="mb-4">Business Name Registration Form</h2>
      <Tab.Container id="registration-tabs" defaultActiveKey="business-info">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="business-info">Business Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="certification">Certification</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="attachments">Attachments</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="business-info">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Enter Registration Number</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="registrationNumber" className="mb-0">
                        <Form.Control type="text" placeholder="Enter registration number" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Enter Registration Number</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="registrationNumber" className="mb-0">
                        <Form.Control type="text" placeholder="Enter registration number" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Add other fields related to Business Information */}
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="certification">
                <Form>
                  {/* Add fields related to Certification */}
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Enter Registration Number</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="registrationNumber" className="mb-0">
                        <Form.Control type="text" placeholder="Enter registration number" required />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="attachments">
                <Form>
                  {/* Add fields related to Attachments */}
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Container>
  );
};

export default FormComponent;
