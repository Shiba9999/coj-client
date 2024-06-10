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
  const [activeTab, setActiveTab] = useState("business-info");
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

  const [certificationData, setCertificationData] = useState({
    certification_provided: "",
    field_or_profession: "",
    expiry_date: "",
    certifying_body: "",
    certification: "",
    certificate_number: "",
  });

  const [workPermitData, setWorkPermitData] = useState({
    permit_required: "",
    permit_number: "",
    expiry_date: "",
  });

  const [perticularApplicant,setPerticularApplicant]=useState({
    permit_required: "",  
    former_christian_name:"",
    former_surname:"",
    place_of_residence:"",
    contact_info:"",
    other_bussiness_occupation:"",
    present_nationality:"",
    nationality_of_origin:""
  })

  const [attachmentFile,setAttachmentFile]=useState({
    file_upload: ""
  })

  const [declaration,setDeclaration]=useState("")
  const [signature,setSignature]=useState({
    signatory_details:"",
    checkbox_signature:"",
    file_upload:"",
    secret_phrase:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const certificationDataChange = (e) => {
    const { name, value } = e.target;
    setCertificationData({
      ...certificationData,
      [name]: value,
    });
  };
  const permitChangeHandler = (e) => {
    const { name, value } = e.target;
    setWorkPermitData({
      ...workPermitData,
      [name]: value,
    });
  };
  const applicantChangeHandler=(e)=>{
    const { name, value } = e.target;
    setPerticularApplicant({
      ...perticularApplicant,
      [name]:value
    })
  }
  const handleFileChange = (e) => {
    
    const { name, value } = e.target;
    setAttachmentFile({
      ...attachmentFile,
      [name]:value
    })
    // setAttachmentFile({ ...attachmentFile, file_upload: event.target.files[0] });
  };
  const handleDeclarationChange = (event) => {
    setDeclaration(event.target.value);
  };
  const signatureChangeHandler =(e)=>{
    const { name, value } = e.target;
    setSignature({
      ...signature,
      [name]:value
    })
  }
  
  

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

  const certificationPercentage = () => {
    const {
      certification_provided,
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
      certificate_number,
    } = certificationData;
    const filledFields = [
      certification_provided,
      field_or_profession,
      expiry_date,
      certifying_body,
      certification,
      certificate_number,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 6) * 100);
  };
  const workPermitPercentage = () => {
    const { permit_required, permit_number, expiry_date } = workPermitData;
    const filledFields = [permit_required, permit_number, expiry_date].filter(
      (field) => field !== ""
    ).length;
    return Math.ceil((filledFields / 3) * 100);
  };
  const applicantPercentage=()=>{
    const {
      permit_required,
      former_christian_name,
      former_surname,
      place_of_residence,
      contact_info,
      other_bussiness_occupation,
      present_nationality,
      nationality_of_origin,
    }=perticularApplicant
    const filledFields = [
      permit_required,
      former_christian_name,
      former_surname,
      place_of_residence,
      contact_info,
      other_bussiness_occupation,
      present_nationality,
      nationality_of_origin,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 8) * 100);
  }

  const attachmentFilePercentage=()=>{
    const   {file_upload}=attachmentFile
    const filledFields=[
      file_upload
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 1) * 100);
  }

  const declarationPercentage=()=>{
    const filledFields=[
      declaration
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 1) * 100);
  }

  const signaturePercentage=()=>{
    const {
      signatory_details,
      checkbox_signature,
      file_upload,
     secret_phrase,
    }=signature
    const filledFields = [
      signatory_details,
      checkbox_signature,
      file_upload,
     secret_phrase,
    ].filter((field) => field !== "").length;
    return Math.ceil((filledFields / 4) * 100);
  
  }
  

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
              <ProgressBar
                now={certificationPercentage()}
                label={`${certificationPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="work-permit"
              onClick={() => setActiveTab("work-permit")}
            >
              Work Permit
              <ProgressBar
                now={workPermitPercentage()}
                label={`${workPermitPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="particulars-of-applicant"
              onClick={() => setActiveTab("particulars-of-applicant")}
            >
              Particulars of Applicant
              <ProgressBar
                now={applicantPercentage()}
                label={`${applicantPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="attachments"
              onClick={() => setActiveTab("attachments")}
            >
              Attachments
              <ProgressBar
                now={attachmentFilePercentage()}
                label={`${attachmentFilePercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="declaration"
              onClick={() => setActiveTab("declaration")}
            >
              Declaration
              <ProgressBar
                now={declarationPercentage()}
                label={`${declarationPercentage()}%`}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="signature"
              onClick={() => setActiveTab("signature")}
            >
              Signature
              <ProgressBar
                now={signaturePercentage()}
                label={`${signaturePercentage()}%`}
              />
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
                          name="certification_provided"
                          value={certificationData.certification_provided}
                          onChange={certificationDataChange}
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
                          name="field_or_profession"
                          value={certificationData.field_or_profession}
                          onChange={certificationDataChange}
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
                          name="expiry_date"
                          value={certificationData.expiry_date}
                          onChange={certificationDataChange}
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
                          name="certifying_body"
                          value={certificationData.certifying_body}
                          onChange={certificationDataChange}
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
                          name="certification"
                          value={certificationData.certification}
                          onChange={certificationDataChange}
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
                          name="certificate_number"
                          value={certificationData.certificate_number}
                          onChange={certificationDataChange}
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
                        <Form.Control
                          type="text"
                          name="permit_required"
                          value={workPermitData.permit_required}
                          onChange={permitChangeHandler}
                          placeholder=""
                          required
                        />
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
                          name="permit_number"
                          value={workPermitData.permit_number}
                          onChange={permitChangeHandler}
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
                          name="expiry_date"
                          value={workPermitData.expiry_date}
                          onChange={permitChangeHandler}
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
                        <Form.Control
                         type="text"
                         name="permit_required"
                         value={perticularApplicant.permit_required}
                         onChange={applicantChangeHandler}
                          placeholder="" 
                          required />
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
                          name="former_christian_name"
                          value={perticularApplicant.former_christian_name}
                          onChange={applicantChangeHandler}
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
                          name="former_surname"
                          value={perticularApplicant.former_surname}
                          onChange={applicantChangeHandler}
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
                          name="place_of_residence"
                          value={perticularApplicant.place_of_residence}
                          onChange={applicantChangeHandler}
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
                          name="contact_info"
                          value={perticularApplicant.contact_info}
                          onChange={applicantChangeHandler}
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
                          name="other_bussiness_occupation"
                          value={perticularApplicant.other_bussiness_occupation}
                          onChange={applicantChangeHandler}
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
                          name="present_nationality"
                          value={perticularApplicant.present_nationality}
                          onChange={applicantChangeHandler}
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
                          name="nationality_of_origin"
                          value={perticularApplicant.nationality_of_origin}
                          onChange={applicantChangeHandler}
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
                    <Form.Control
                      style={{
                        height: "96px",
                        width: "100%", // Set the width to fill the entire column
                        whiteSpace: "pre-wrap", // Allow text to wrap
                      }}
                    name="file_upload"
                    value={attachmentFile.file_upload}
                    onChange={handleFileChange}
                    type="file"
                    
                    />
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
                          name="declaration"
                          value={declaration}
                          onChange={handleDeclarationChange}
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
                          name="signatory_details"
                          value={signature.signatory_details}
                          onChange={signatureChangeHandler}
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
                          name="checkbox_signature"
                          value={signature.checkbox_signature}
                          onChange={signatureChangeHandler}
                          placeholder="Checkbox Signature"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form>
                    <Form.Group controlId="fileUpload" className="mb-3">
                      <Form.Label>Upload File</Form.Label>
                      <Form.Control 
                      
                      style={{
                        height: "96px",
                        width: "100%", // Set the width to fill the entire column
                        whiteSpace: "pre-wrap", // Allow text to wrap
                      }}
                      name="file_upload"
                      value={signature.file_upload}
                      onChange={signatureChangeHandler}
                      type="file" />
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
                          name="secret_phrase"
                          value={signature.secret_phrase}
                          onChange={signatureChangeHandler}

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
