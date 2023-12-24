import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserGraduate } from "react-icons/fa";

const Header = () =>{
    return(
        <Container fluid className=' bgc-clr'>
            <Row className='d-flex flex-row justify-content-between'>
                <Col  className='align-items-center justify-content-center' >
                <h2>
                <FaUserGraduate size={35} />
                 HEY ALL</h2></Col>
            <Col className='align-items-end justify-content-end'>hello</Col>
            </Row>
        </Container>
    )
}

export default Header;
