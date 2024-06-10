import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Tab,
  Nav,
  ProgressBar,
} from "react-bootstrap";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    registration_number: "",
    business_name: "",
    other_business_number: "",
    commencement_date: "",
    renewal_date: "",
    business_nature: "",
    business_of_nature: "",
    business_address: "",
    contact_information: "",
    business_branches: "",
    change_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
console.log("formData",formData);
  const calculatePercentage = () => {
    const {
      registration_number,
      business_name,
      other_business_number,
      commencement_date,
      renewal_date,
      business_nature,
      business_of_nature,
      business_address,
      contact_information,
      business_branches,
      change_name,
    } = formData;
    const filledFields = [
      registration_number,
      business_name,
      other_business_number,
      commencement_date,
      renewal_date,
      business_nature,
      business_of_nature,
      business_address,
      contact_information,
      business_branches,
      change_name,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 11) * 100); // Adjusted for 11 fields in "Business Information" tab
  };

  const [activeTab, setActiveTab] = useState("business-info");
  const tabs = [
    "business-info",
    "certification",
    "work-permit",
    "particulars-of-applicant",
    "attachments",
    "declaration",
    "signature",
  ];
  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Business Name Registration Form</h2>
      <Tab.Container id="registration-tabs" activeKey={activeTab}>
        <Nav variant="pills" className="justify-content-center mb-3">
          <Nav.Item>
            <Nav.Link
              eventKey="business-info"
              onClick={() => setActiveTab("business-info")}
            >
              Business Information
              <ProgressBar
                now={calculatePercentage()}
                label={`${calculatePercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="certification"
              onClick={() => setActiveTab("certification")}
            >
              Certification
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="work-permit"
              onClick={() => setActiveTab("work-permit")}
            >
              Work Permit
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="particulars-of-applicant"
              onClick={() => setActiveTab("particulars-of-applicant")}
            >
              Particulars of Applicant
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="attachments"
              onClick={() => setActiveTab("attachments")}
            >
              Attachments
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="declaration"
              onClick={() => setActiveTab("declaration")}
            >
              Declaration
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="signature"
              onClick={() => setActiveTab("signature")}
            >
              Signature
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="business-info">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Enter Registration Number
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="number"
                          name="registration_number"
                          value={formData.registration_number}
                          onChange={handleChange}
                          placeholder="Enter registration number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Name of Business</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="business_name"
                          value={formData.business_name}
                          onChange={handleChange}
                          placeholder="Name of Business"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Number of Other business name under which business will
                        be carried out
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="number"
                          name="other_business_number"
                          value={formData.other_business_number}
                          onChange={handleChange}
                          placeholder="Number of Other business"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Date of Commencement
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="date"
                          name="commencement_date"
                          value={formData.commencement_date}
                          onChange={handleChange}
                          placeholder="Date of Commencement"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Effective date of Renewal
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="date"
                          name="renewal_date"
                          value={formData.renewal_date}
                          onChange={handleChange}
                          placeholder="Effective date of Renewal"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        General Nature of business:{" "}
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="business_nature"
                          value={formData.business_nature}
                          onChange={handleChange}
                          placeholder="General Nature of business"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        General Nature of business{" "}
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="business_of_nature"
                          value={formData.business_of_nature}
                          onChange={handleChange}
                          placeholder="General Nature of business"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Principal Address of the Business:{" "}
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="business_address"
                          value={formData.business_address}
                          onChange={handleChange}
                          placeholder="Principal Address of the Business"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Contact Information
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="contact_information"
                          value={formData.contact_information}
                          onChange={handleChange}
                          placeholder="Contact Information"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Branches for the Business (Are there branches from which
                        the business will be/ is being conducted)
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="business_branches"
                          value={formData.business_branches}
                          onChange={handleChange}
                          placeholder="Branches for the Business"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Is there any changes to Name, address or activity
                        carried on by the business
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          name="change_name"
                          value={formData.change_name}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="certification">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Have you provided the relevant certification as a part
                        of your application?
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text" 
                          placeholder="Enter registration number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Field or Profession
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Field or Profession"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0"> Expiry Date:</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="date"
                          placeholder=" Expiry Date"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        {" "}
                        Certifying Body:
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder=" Certifying Body"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0"> Certification</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder=" Certification"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        {" "}
                        Certificate number
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Certificate number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="work-permit">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Whether permit is required to carry on business
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control type="text" placeholder="" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Work permit number
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="number"
                          placeholder="Work permit number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Expiry date of work permit
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="date"
                          placeholder=" Expiry date of work permit"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="particulars-of-applicant">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Whether permit is required to carry on business
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control type="text" placeholder="" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Former Christian name
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Former Christian name"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Former Surname</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Former Surname"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Place of residence
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Place of residence"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Contact Information
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Contact Information"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Other Business Occupation
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Other Business Occupation"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Present Nationality
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Present Nationality"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Nationality of Origin
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Nationality of Origin"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="attachments">
                <Form>
                  <Form.Group controlId="fileUpload" className="mb-3">
                    <Form.Label>Upload File</Form.Label>
                    <Form.Control type="file" />
                    <Form.Text className="text-muted">
                      Please upload any necessary attachments here.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="declaration">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Declaration</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="declaration" className="mb-0">
                        <Form.Control
                          style={{
                            height: "96px",
                            width: "100%", // Set the width to fill the entire column
                            whiteSpace: "pre-wrap", // Allow text to wrap
                          }}
                          as="textarea" // Use textarea for multi-line input
                          placeholder="Declaration"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="signature">
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Signatory Details
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Signatory Details"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">
                        Checkbox Signature
                      </Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Checkbox Signature"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form>
                    <Form.Group controlId="fileUpload" className="mb-3">
                      <Form.Label>Upload File</Form.Label>
                      <Form.Control type="file" />
                      <Form.Text className="text-muted">
                        Please upload any necessary attachments here.
                      </Form.Text>
                    </Form.Group>
                  </Form>
                  <Row className="mb-3">
                    <Col md={6} className="d-flex align-items-center">
                      <Form.Label className="mb-0">Secret Phrase</Form.Label>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        controlId="registrationNumber"
                        className="mb-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Secret Phrase"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
            </Tab.Content>
            <div className="mt-4 d-flex justify-content-center ">
              <Button
                className="mr-5"
                variant="secondary"
                disabled={tabs.indexOf(activeTab) === 0}
                onClick={handlePrev}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                disabled={tabs.indexOf(activeTab) === tabs.length - 1}
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default FormComponent;
//correct code