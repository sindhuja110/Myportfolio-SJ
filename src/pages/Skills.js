import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import SkillsCard from '../components/SkillCard';
import htmlImage from '../Assets/html.png';
import cssImage from '../Assets/css.png';
import jsImage from '../Assets/js.png';
import reactImage from '../Assets/react.png';
import fluImage from '../Assets/fltr.png';
import btsImage from '../Assets/btsp.png';
import gitImage from '../Assets/git.png';
import githImage from '../Assets/github.png';
import vsImage from '../Assets/vscd.png';
import pstImage from '../Assets/postman.png';
import { useTranslation } from 'react-i18next';


const Skills = ({isDarkMode}) => {
  const { t } = useTranslation();

  return (
    <Container fluid className="mt-5">
      <h3
        id="skl"
        className="bg-clr d-flex justify-content-center align-items-end"
        style={{ fontFamily: 'serif', marginBottom: '10px' }}
      >
        <LiaLaptopCodeSolid size={32} style={{ marginRight: '10px' }} /> {t("SKILLS" )}
      </h3>
      <Row className="text-light">
        <Col xs={12} className="text-center text-light">
          <h3 className={`${isDarkMode ? 'text-Light' : 'text-dark'}`}>{t("Programming Languages" )}</h3>
          <h6 className='bg-clr'>{t("I Know" )}</h6>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="HTML" imageUrl={htmlImage} borderColor="coral" isDarkMode={isDarkMode} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="CSS" imageUrl={cssImage} borderColor="coral" isDarkMode={isDarkMode}/>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="Bootstrap" imageUrl={btsImage} borderColor="coral" isDarkMode={isDarkMode}/>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="JS" imageUrl={jsImage} borderColor="coral"isDarkMode={isDarkMode} />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="React" imageUrl={reactImage} borderColor="coral" isDarkMode={isDarkMode}/>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="Flutter" imageUrl={fluImage} borderColor="coral"isDarkMode={isDarkMode} />
        </Col>
      </Row>
      <Row className="text-light justify-content-center">
        <Col xs={12} className="text-center text-light">
          <h3 className={`${isDarkMode ? 'text-Light' : 'text-dark'}`}>{t("Tools" )}</h3>
          <h6 className='bg-clr'>{t("I use" )}</h6>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="VS Code" imageUrl={vsImage} borderColor="coral" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="Git" imageUrl={gitImage} borderColor="coral" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="GitHub" imageUrl={githImage} borderColor="coral" />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <SkillsCard title="Postman" imageUrl={pstImage} borderColor="coral" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
