import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicButton from "./BasicButton";

const NavBar = () =>{
    return(
      <Container fluid>
        <Row className="d-flex flex-row justify-content-around align-items-center bg-wrt"> 
        <Col className="m-2">About</Col>
        <Col className="m-2">Education</Col>
        <Col className="m-2">Skills</Col>
        <Col className="m-2"> 
        <BasicButton
         label='Contact' 
         color='black' 
         className="boxsd"/>
         </Col>
        </Row>
      </Container>
    )
}

export default NavBar;