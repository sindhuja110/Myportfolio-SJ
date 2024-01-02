import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicButton from "./BasicButton";

const NavBar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("cnt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container fluid>
      <Row className="d-flex flex-row justify-content-around align-items-center bg-clr">
        <Col className="m-2 link">
          <a href="#abt" style={{ textDecoration: "none", color: "white" }}>
            About
          </a>
        </Col>
        <Col className="m-2 link">
          <a href="#exp" style={{ textDecoration: "none", color: "white" }}>
            Education
            
          </a>
        </Col>
        <Col className="m-2 link">
          <a href="#skl" style={{ textDecoration: "none", color: "white" }}>
            Skills
          </a>
        </Col>
        <Col className="m-2">
          <BasicButton
            label="Contact"
            color="coral"
            tcolor="black"
            className="boxsd text-bd"
            onClick={scrollToContact}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
