import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicButton from "./BasicButton";
import { useTranslation } from "react-i18next";

const NavBar = (isDarkMode) => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById("cnt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container fluid >
      <Row className="d-flex flex-row justify-content-around align-items-center bg-clr">
        <Col className="m-2 link">
          <a href="#abt" style={{ textDecoration: "none"}} className="bg-clr">
            {t("About")}
          </a>
        </Col>
        <Col className="m-2 link">
          <a href="#exp" style={{ textDecoration: "none" }} className="bg-clr">
            {t("Education")}
          </a>
        </Col>
        <Col className="m-2 link">
          <a href="#skl" style={{ textDecoration: "none" }} className="bg-clr">
            {t("Skills")}
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
