import React from "react";
import NavBar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const MainPages = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex flex-row justify-content-around align-items-center"
    >
      <Row className="d-flex flex-row justify-content-center align-items-center">
        <Col className="text-center">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1 className="bg-clr" style={{fontFamily:'serif'}}>Hy!! I'm Sindhuja</h1>
            <p className="text-light">
              Welcome to my portfolio! I'm a passionate front-end developer with a love for creating engaging and interactive web applications. My skills include HTML, CSS, JavaScript, and React.js.
            </p>
          </div>
          <NavBar />
          <Col className="bg-clr  ">
            {/* Other social media links */}
            <a href="https://www.instagram.com/sindhuja_ak?igsh=ODA1NTc5OTg5Nw==" target="blank" className="bg-clr">
              <FaInstagram size={35} className="m-3 icon" />
            </a>
            <a href="https://www.linkedin.com/in/sindhuja-ak-a72a49282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" className="bg-clr">
              <FaLinkedin size={35} className="m-3 icon" />
            </a>
            <a href="https://github.com/sindhuja110" target="blank" className="bg-clr ">
              <FaGithub size={35} className="m-3 icon" />
            </a>
            
            {/* Mail icon link */}
            <a href="mailto:sindhuja1106@gmail.com" target="blank" className="bg-clr ">
              <MdOutlineMailOutline size={35} className="m-3 icon" />
            </a>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPages;
