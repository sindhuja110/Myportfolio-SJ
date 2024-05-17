import React from "react";
import NavBar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";
import mainimag from '../Assets/dev.json';


const MainPages = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <Container
      fluid
      className={`vh-100 d-flex flex-row justify-content-around align-items-center ${isDarkMode ? 'dark-mode' : ''}`}
    >
      <Row className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
        <Col md={6} className="order-md-1 text-center">
          <div style={{ maxWidth: "550px", margin: "0 auto" }}>
            <h2 className="bg-clr" style={{ fontFamily: 'serif' }}>
              {t("Hy!! I'm Sindhuja" )}
            </h2>
            <p style={{fontSize:"20px", fontWeight:"bold", marginTop:'20px'}}>
              <Typewriter
                words={['Front-End Developer','App Developer','Web Develeoper','UI/UX Designer']}
                loop={true}
                cursor
                cursorStyle='|'
                cursorColor="coral"
                typeSpeed={50}
                deleteSpeed={35}
                delaySpeed={1000}
              />
            </p>
          </div>
          <NavBar isDarkMode={isDarkMode}/>
          <Col className="bg-clr mt-5">
            {/* Other social media links */}
            <a
              href="https://www.instagram.com/sindhuja_ak?igsh=ODA1NTc5OTg5Nw=="
              target="blank"
              className="bg-clr"
            >
              <FaInstagram size={35} className="m-3 icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sindhuja-ak-a72a49282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
              className="bg-clr"
            >
              <FaLinkedin size={35} className="m-3 icon" />
            </a>
            <a
              href="https://github.com/sindhuja110"
              target="blank"
              className="bg-clr "
            >
              <FaGithub size={35} className="m-3 icon" />
            </a>

            {/* Mail icon link */}
            <a
              href="https://www.google.com/gmail/about/"
              target="blank"
              className="bg-clr "
            >
              <MdOutlineMailOutline size={35} className="m-3 icon" />
            </a>
          </Col>
        </Col>
        <Col md={6} className="order-md-2 text-center">
          <div>
          <Lottie 
              animationData={mainimag}
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

export default MainPages;
