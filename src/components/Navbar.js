import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicButton from "./BasicButton";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () =>{
  const navigate = useNavigate(); // Call useNavigate here

  const handleAdd = () => {
    navigate('/contact');
  };
  

    return(
      <Container fluid>
        <Row className="d-flex flex-row justify-content-around align-items-center bg-clr"> 
        <Col className="m-2 link">
          <Link to={'/about'} style={{textDecoration:'none', color:'white'}}>About</Link></Col>
        <Col className="m-2 link"><Link to={'/experience'} style={{textDecoration:'none', color:'white'}}>Experience</Link></Col>
        <Col className="m-2 link"><Link to={'/skills'} style={{textDecoration:'none', color:'white'}} >Skills</Link></Col>
        <Col className="m-2 "> 
        <BasicButton
         label='Contact' 
         color='coral' 
         className="boxsd text-bold"
         onClick={handleAdd}
         />
         </Col>
        </Row>
      </Container>
    )
}

export default NavBar;