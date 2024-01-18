import React from 'react';
import { Container } from 'react-bootstrap';
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Skills = () => {
    return(
        
        <Container fluid className='mt-5 '>
      <h3 id="skl" className="bg-clr d-flex justify-content-center align-items-end" style={{ fontFamily: 'serif', marginBottom: "10px" }}>
         <LiaLaptopCodeSolid size={32} style={{ marginRight:"10px" }} /> SKILLS
      </h3>
      </Container>
      )
}
export default Skills