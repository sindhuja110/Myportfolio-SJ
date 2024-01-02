import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBookOpenReader } from 'react-icons/fa6';

const Experience = () => {
  return ( 
    <Container fluid className='mt-5 '>
      <h3 id="exp" className="bg-clr d-flex justify-content-center align-items-end" style={{ fontFamily: 'serif', marginBottom: "10px" }}>
        EDUCATION <FaBookOpenReader size={35} style={{ marginLeft: "10px" }} />
      </h3>
    <div className="education-container mt-3">


      <div className="education-item mt-5">
        <h5>Oasys Institute of Technology, Trichy</h5>
        <h6>Web Development</h6>
        <p className='text-secondary'>2023</p>
      </div>


      <div className="education-item">
        <h5>Annai College of Arts and Science, Kumbakonam</h5>
        <h6>Master of Science</h6>
        <p className='text-secondary'>2021 - 2023</p>
      </div>


      <div className="education-item">
        <h5>Government Arts and Science, Kumbakonam</h5>
        <h6>Bachelor of Science</h6>
        <p className='text-secondary'>2018 - 2021</p>
      </div>


      <div className="education-item">
        <h5>Higher Secondary Certificate</h5>
        <h6>Minerva Higher Secondary School</h6>
        <p className='text-secondary'>2017 - 2018</p>
      </div>
    </div>
    </Container>
  );
}

export default Experience;

