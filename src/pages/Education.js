import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBookOpenReader } from 'react-icons/fa6';
import { useSpring, animated } from 'react-spring';

  const SkillCard = ({ title, description,name }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <Col md={6} lg={4}>
      <animated.div style={animationProps}>
        <div className="skill-card">
        <h5>{title}</h5>
          <h6>{description}</h6>
          <p>{name}</p>
        </div>
      </animated.div>
    </Col>
  );
};

const Education = () => {

  return (
    <Container fluid >
      <header>
      <h3 id="exp" className="bg-clr d-flex justify-content-center align-items-end" style={{ fontFamily: 'serif', marginBottom: "10px" }}>
        <FaBookOpenReader size={35} style={{ marginRight: "10px" }} />  EDUCATION 
      </h3>
      
      </header>

      <Row className="justify-content-center">
        <SkillCard
          title="Oasys Institute of Technology, Trichy"
          description="Web Development"
          name="2023"
        />
        <SkillCard
          title="Annai College of Arts and Science, Kumbakonam"
          description="Master of Science"
          name="2021 - 2023"

        />
        <SkillCard
          title="Government Arts and Science, Kumbakonam"
          description="Bachelor of Science"
          name="2018 - 2021"

        />
        <SkillCard
          title=" Minerva Higher Secondary School, Kumbakonam"
          description="Higher Secondary Certificate"
          name="2017 - 2018"

        />
        {/* Add more SkillCard components for additional skills */}
      </Row>
    </Container>
  );
};
 

 
export default Education;
