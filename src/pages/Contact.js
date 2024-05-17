import React, { useState } from "react";
import { Col, Container, Form, Row, Toast } from "react-bootstrap";
import { LuSend } from "react-icons/lu";
import { MdContacts, MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import BasicButton from "../components/BasicButton";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';



const ContactMe = (isDarkMode) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
     // Hide error message as soon as user starts typing
     if (errorMessage) {
      setErrorMessage("");
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name && !formData.email && !formData.message) {
      setErrorMessage("Please fill all mandatory fields.");
      return null ;
    }
    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS IDs
      await emailjs.send(
        "service_3crvd62",
        "template_2pqpvxf",
        templateParams,
        "e1xtCQtBW0GAeExFG"
      );

      // Show the success toast
      setShowToast(true);

      // Clear the form data after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error (e.g., show an error toast)
    }
  };

  return (
    <Container fluid className='mt-5' >
      <div className="text-center" style={{ marginBottom: "50px" }}>
        <h3
          id="cnt"
          className="bg-clr mx-2"
          style={{ fontFamily: "serif", marginBottom: "10px" }}
        >
          {" "}
          <MdContacts style={{ marginRight: "10px" }} />
          {t("CONTACT" )}
        </h3>
        <h6 >
          {t("Feel free to reach out to me using the form below.  I'll get back to you as soon as possible!" )}
        </h6>
      </div>
      <Row className="d-flex flex-row justfy-content-start align-items-center">
        <Col className="d-flex flex-column align-items-center justfy-content-center text-center m-3">
          <div>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.2186881746637!2d79.82446934302189!3d10.972825245555098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5517cc9af6a0fb%3A0x89d50e53eccc9d13!2sRayanpalayam%20bus%20stop!5e0!3m2!1sen!2sin!4v1705841481017!5m2!1sen!2sin"
              width="270"
              height="180"
              style={{ border: "ActiveBorder", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <address
            className={`mt-3`} 
            style={{
              fontSize: "17px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdLocationOn size={35} style={{ color: "coral" }} />
            <span>
              {t("27, Rayanpalaiyam," )}
              <br />
              {t("Karaikal-609609." )}
            </span>
          </address>

          <a
            href="https://www.google.com/gmail/about/"
            style={{

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10px",
              color: isDarkMode? 'text-Light': 'text-dark'
            }}
          >
            <MdEmail size={30} style={{ color: "coral" }} />
            sindhuja1106@gmail.com
          </a>
        </Col>
        <Col className="m-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className={`mt-3${isDarkMode ? 'text-dark' : 'text-Light'}`} >
              <Form.Label> {t("Name :" )}</Form.Label>
              <Form.Control
          type="text"
          placeholder={t("Your Name.." )}
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            border: '4px solid coral',
            transition: 'border-color 0.3s',
          }}
          required
        />
        </Form.Group>
            <Form.Group controlId="email" className={`mt-3${isDarkMode ? 'text-dark' : 'text-Light'}`} >
              <Form.Label>{t("Email :" )}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t("Your Email.." )}
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  border: '4px solid coral',
                  transition: 'border-color 0.3s',
                }}
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className={`mt-3${isDarkMode ? 'text-dark' : 'text-Light'}`} >
              <Form.Label>{t("Message :" )}</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={t("Your Message.." )}
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  border: '4px solid coral',
                  transition: 'border-color 0.3s',
                }}
                required
              />
            </Form.Group>
            {errorMessage && (
        <div className="text-center mb-2 mt-3">{errorMessage}</div>
      )}
     
            <Col className="text-center">
              <BasicButton
                label="Send Message"
                icon={<LuSend size={27} />}
                color="coral"
                type="submit"
                tcolor="black"
                className="mt-4 text-center boxsd"
                onClick={handleSubmit}
              />
            </Col>
          </Form>

          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            autohide
            delay={2500}
            style={{
              position: "fixed",
              bottom: 20,
              right: 20,
              backgroundColor: "black",
              minWidth: "200px",
              maxWidth: "70%",
            }}
          >
            <Toast.Header className="bgc-clr">
              <strong className="mr-auto">{t("Thanks You..!" )}</strong>
            </Toast.Header>
            <Toast.Body className="text-light">
              {t("Your message has been sent successfully" )}
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
      <footer className="bg-dark text-light py-1 mt-4">
        <hr className="my-2" />
        <Col className="text-center text-noWrap">
          <p>
            {" "}
            Copyrights &copy; 2024 sindhuja_ak.
            <br />
            All rights reserved.
          </p>
        </Col>
        <Col className="bg-clr text-center">
            {/* Other social media links */}
          <a
              href="https://www.instagram.com/sindhuja_ak?igsh=ODA1NTc5OTg5Nw=="
              target="blank"
              className="bg-clr"
            >
              <FaInstagram size={27} className="m-3 icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sindhuja-ak-a72a49282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
              className="bg-clr"
            >
              <FaLinkedin size={27} className="m-3 icon" />
            </a>
            <a
              href="https://github.com/sindhuja110"
              target="blank"
              className="bg-clr "
            >
              <FaGithub size={27} className="m-3 icon" />
            </a>

            {/* Mail icon link */}
            <a
              href="https://www.google.com/gmail/about/"
              target="blank"
              className="bg-clr "
            >
              <MdOutlineMailOutline size={27} className="m-3 icon" />
            </a>
          </Col>
      </footer>
    </Container>
  );
};

export default ContactMe;
