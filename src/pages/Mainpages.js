import React from "react";
import NavBar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import  {FaInstagram ,  FaGithub}  from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import backgroundImage from '../Assets/mainimage.jpg'

const MainPages = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-row justify-content-around align-items-center"   style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', }}>
      <Row className="d-flex flex-row justify-content-center align-items-center">
        <Col className="text-center ">
          <h2 className="bg-clr">Hy!! I'm Sindhuja</h2>
          <h5 className="mb-5 bg-wrt">Front end developer </h5>
          <NavBar/>
          <Col className="bg-clr">
          <FaInstagram size={35} className="m-3"/>
          <FaLinkedin size={35}className="m-3"/> 
          < FaGithub size={35} className="m-3"/>
          <MdOutlineMailOutline size={40} className="m-3"/></Col>
        </Col></Row>
    </Container>
 
  );
};

export default MainPages;
