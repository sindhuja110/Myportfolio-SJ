import React, { useState } from 'react';
import { Col, Container, Form,  Row,  Toast } from 'react-bootstrap';
import { LuSend } from "react-icons/lu";
import { MdContacts, MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import BasicButton from '../components/BasicButton';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS IDs
      await emailjs.send('service_3crvd62', 'template_2pqpvxf', templateParams, 'e1xtCQtBW0GAeExFG');

      // Show the success toast
      setShowToast(true);

      // Clear the form data after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error (e.g., show an error toast)
    }
  };

  return (
    <Container fluid className='text-light mt-5'>
      <div className='text-center' style={{marginBottom:"50px"}}>
        <h3 id='cnt' className='bg-clr mx-2' style={{ fontFamily: 'serif', marginBottom:"10px" }}> <MdContacts style={{marginRight:"10px"}} />Contact Me</h3>
        <p>Feel free to reach out to me using the form below.  I'll get back to you as soon as possible!</p>
      </div>
      <Row className='d-flex flex-row justfy-content-start align-items-center'>
 <Col className='d-flex flex-column align-items-center justfy-content-center text-center m-3'>
      <div >
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8755638933294!2d79.82116893759436!3d10.972764044631088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a551749493af835%3A0x93f7674752d2b8b!2sRayanpalayam%20Main%20Rd%2C%20Puducherry%20609609!5e0!3m2!1sen!2sin!4v1704109146897!5m2!1sen!2sin"
          width="270"
          height="180"
          style={{ border: "ActiveBorder", borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <address className='mt-3' style={{ fontSize: "17px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MdLocationOn size={35} style={{ color: 'coral' }} />
        <span>
          27, Mathina Street, Rayanpalaiyam,<br />
          Karaikal-609609.
        </span>
      </address>

      <a href='https://www.google.com/gmail/about/' style={{ textDecoration: "none", color: "white", display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        <MdEmail size={30} style={{ color: 'coral' }} />
        sindhuja1106@gmail.com
      </a>
    </Col>
      <Col className='m-3'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className='mt-3'>
          <Form.Label> Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder='Enter your Name..'
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className='mt-3'>
          <Form.Label>Email :</Form.Label>
          <Form.Control
            type="email"
            placeholder='Enter your Email..'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        

        <Form.Group controlId="message" className='mt-3'>
          <Form.Label>Message :</Form.Label>
          <Form.Control
            as="textarea"
            placeholder='Enter your Message..'
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
<Col className='text-center'>
        <BasicButton 
        label="Send Message"
         icon={<LuSend size={27}/>} 
         color="coral" 
         type="submit" 
         tcolor="black"
         className='mt-4 text-center boxsd'
         onClick={ handleSubmit}
            
         />
          </Col>
      </Form>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        autohide
        delay={2500}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: 'black',
          minWidth: '200px',
          maxWidth: '70%',
        }}
      >
        <Toast.Header className='bgc-clr'>
          <strong className="mr-auto">Thanks You..!</strong>
        </Toast.Header>
        <Toast.Body className='text-light'>Your message has been sent successfully</Toast.Body>
      </Toast>
      </Col>
      </Row>
      <footer className="bg-dark text-light py-1 mt-4" >
        <hr className="my-2" />
          <Col className="text-center text-noWrap">
            <p> Copyrights &copy; 2024 sindhuja_ak.<br/>
              All rights reserved.</p>
          </Col>
    </footer>
    </Container>
  );
};

export default ContactMe;
