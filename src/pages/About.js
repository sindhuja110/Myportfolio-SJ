import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdPerson } from 'react-icons/md';
import DownloadResumeButton from '../components/Resume';
import mainimage from '../Assets/dev.json';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';


const About = (isDarkMode) => {
  const { t } = useTranslation();

  return (
    <Container
      fluid
      className={`d-flex flex-row justify-content-around align-items-center text-center`}
    >
      <Row className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
        
        <Col md={6} className={`order-md-1 text-center${isDarkMode ? 'text-dark' : 'text-Light'}`} >
          <div
            style={{ maxWidth: '550px', margin: '10px auto', marginTop: '25px' }}
          >
            <Col style={{ fontSize: '15px', marginTop:"30px" }}>
              <p>
                 {t("Hi there! I'm" )}{' '}
                <span className="bg-clr" style={{ fontSize: 'large' }}>
                  {t("SINDHUJA" )}
                </span>
                {t(", a dedicated frontend developer with a passion for creating delightful and interactive web experiences. My expertise includes" )}
                {' '}
                <span className="bg-clr" style={{ fontWeight: 'bold' }}>
                  HTML, CSS, JavaScript, React.js
                </span>{' '}
                {t("and I'm always exploring the latest frameworks like" )}
                {' '}
                <span className="bg-clr" style={{ fontWeight: 'bold' }}>
                  Flutter 
                </span>{' '}
                {t("to enhance my skills." )}
              </p>
            </Col>
            <Col className='mt-5'>
              <DownloadResumeButton/>
            </Col>
          </div>
        </Col>
        
      <h3 id="abt" className="bg-clr d-flex justify-content-center text-center align-items-end" style={{ fontFamily: 'serif', marginBottom:"10px" }}>
              <MdPerson  size={35} style={{marginRight:"10px"}}/>{t('ABOUT ME')}</h3>
              <Col md={6} className="order-md-2 text-center text-light">
          <div className="d-flex justify-content-center align-items-center">
          <Lottie 
              animationData={mainimage}
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
              loop={true}
              autoplay={true}
            />
          </div>
        </Col>
     
      </Row>
    </Container>
  );
};

export default About;
