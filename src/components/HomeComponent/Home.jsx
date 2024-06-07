import React from "react";
import Header from "./Header";
import FormComponent from "./FormComponent";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="mx-auto" style={{ maxWidth: "1200px", padding: "0 15px" }}>
        <Header />
        <FormComponent />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
