import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserGraduate } from "react-icons/fa";
import Togglebutton from './Togglebutton';
import LanguageDropdown from './Language';

const Header = () =>{
    return(
        <Container fluid className=' bgc-clr d-flex flex-row justify-content-between' style={{ position: "fixed", top: "0" ,zIndex:'1000'}}>
            <Row className='d-flex flex-row justify-content-start align-items-center'>
                <Col  className=' d-flex flex-row align-items-center justify-content-end' >
                <FaUserGraduate size={30}/>
                <h4 className='mt-2 m-1 text-bold' style={{fontFamily:'serif',fontSize:'x-large'}}> SJ </h4></Col>
            </Row>
            <Row className='d-flex flex-row justify-content-end '>
                <Col className=' justify-content-end '>
                <Togglebutton/>
                </Col>
                <Col>
                <LanguageDropdown/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
