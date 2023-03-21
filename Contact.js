import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { contactConfig } from "../content_option";

function Contact() {
  return (
    <>
        <Sidebar />
        <Navbar />

      <Container>
        <Row className="mb-5 mt-3">
          <Col lg='8'>
            <h1 className="display-4 mb-4">
             Get in Touch:
            </h1>
          </Col>
        </Row>
      
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec" py-4>OPENING HOURS: <br/>
          MONDAY to SATURDAY (9:00am to 6:00pm)</h3>
          <br/>
          <address>
            <strong>Email : pencoop@hotmail.com / pencoop2006@gmail.com</strong>
            <br/>
            <br/>
           <p>
            <strong>Phone: (02) - 8353 - 2214 / 09567536518 & 09399080338</strong>
           </p>
          </address>
          <p>Office Address:
            #2344 Corner Onyx and Primo Rivera St,
            Brgy La Paz, Makati City  </p>
        </Col>
        <Col lg='7' className="d-flex align-items-center">
          <form className="contact_form w-100">
            <Row>
              <Col lg='6' className="form-group">
                <input 
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                />
              </Col>

              <Col lg='6' className="form-group">
                <input 
                className="form-control rounded-0"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                />
              </Col>
            </Row>
          <textarea
                  className="form-control rounded-0" id="message"
                  name="message"
                  placeholder="Message"
                  rows='5'
          ></textarea>
        <br/>
        <Row>
          <Col lg='12' className="form-group">
            <button className="btn ac_btn" type="submit">Send</button>
          </Col>
        </Row>

          </form>
        </Col>
      </Row>
      </Container>


        <Footer />

        </>
  );
};

export default Contact;
