import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return(
        <Container
        fluid
        className="d-flex flex-row justify-content-around align-items-center"
        >
            <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col className="text-center text-light">
          <div style={{ maxWidth: "600px", margin: "10px auto",marginTop:'25px' }}>
            <h3 className="bg-clr" style={{fontFamily:'serif'}}>ABOUT ME</h3>
        <Col style={{fontSize:'15px'}}>
        <p> Hi there! I'm <span className='bg-clr' style={{fontSize:'large'}}>SINDHUJA</span>, a dedicated frontend developer with a passion for creating delightful and
            interactive web experiences. My expertise includes <span  className='bg-clr' style={{fontWeight:'bold'}}>HTML, CSS, JavaScript</span>
 and I'm always exploring the latest frameworks like <span  className='bg-clr' style={{fontWeight:'bold'}}>React.js</span> to enhance my skills.
          </p></Col>
        </div>
   </Col>
   <Col className='d-flex flex-row '>
   <Col className="text-start  text-light" style={{ fontSize:'15px'}}> 
   </Col>
   

<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-date">2000-2005</div>
        <div class="timeline-content">
            <p>Elementary School</p>
            <p>Learned the basics of various subjects.</p>
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">2006-2010</div>
        <div class="timeline-content">
            <p>Middle School</p>
            <p>Explored different subjects and developed foundational skills.</p>
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">2011-2015</div>
        <div class="timeline-content">
            <p>High School</p>
            <p>Studied advanced subjects and prepared for college.</p>
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">2016-2020</div>
        <div class="timeline-content">
            <p>College</p>
            <p>Specialized in a specific field of study and gained in-depth knowledge.</p>
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">2021-2023</div>
        <div class="timeline-content">
            <p>Postgraduate Studies</p>
            <p>Continued education at an advanced level in a specific area.</p>
        </div>
    </div>
</div>
   </Col>
   </Row>
   
     
    </Container> 
    
    )
}
export default About