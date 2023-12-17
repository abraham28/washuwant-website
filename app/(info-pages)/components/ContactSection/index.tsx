import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ContactSection.module.scss";
import Link from "next/link";
import Maps from "../Maps";

const ContactSection = () => {
  return (
    <Container fluid as="section" className={styles.wrapper} id="contacts">
      <h1>Location</h1>
      <Container>
        <Row className={styles.row}>
          <Col lg={6}>
            <h3>Address</h3>
            <p>
              #042 Pugong Ginto St. Brgy. Santa Monica, Novaliches, Quezon City
            </p>

            <h3>Working Hours</h3>
            <p>8 AM to 8 PM</p>
            <p>Self Service Cut-off time 6 PM</p>
            <p>Drop off and Pick-up upto 8 PM</p>

            <h3>Contact Channels</h3>
            <p>Phone: 0976-253-1732</p>
            <p>Tel: 028-638-9866</p>
            <p>Facebook: facebook.com/WashUWant</p>
          </Col>

          <Col lg={6}>
            <h3>Google Maps Location</h3>
            <p>
              <Link
                href="https://maps.app.goo.gl/ek3uBkQmeBAGxFwr6"
                target="_blank"
              >
                https://maps.app.goo.gl/ek3uBkQmeBAGxFwr6
              </Link>
            </p>
            <Maps />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactSection;
