import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ContactSection.module.scss";
import Link from "next/link";
import Maps from "../Maps";
import * as constants from "@/app/constants";

const ContactSection = () => {
  return (
    <Container fluid as="section" className={styles.wrapper} id="contacts">
      <h1>Location</h1>
      <Container>
        <Row className={styles.row}>
          <Col lg={6}>
            <h3>Address</h3>
            <p>{constants.PHYSICAL_ADDRESS}</p>

            <h3>Working Hours</h3>
            <p>8 AM to 8 PM</p>
            <p>Self Service Cut-off time 6 PM</p>
            <p>Drop off and Pick-up upto 8 PM</p>

            <h3>Contact Channels</h3>
            <p>
              Phone:&nbsp;
              <Link href={`tel:${constants.PHONE_NUMBER}`}>
                {constants.PHONE_NUMBER}
              </Link>
            </p>
            <p>
              Tel:&nbsp;
              <Link href={`tel:${constants.TEL_NUMBER}`}>
                {constants.TEL_NUMBER}
              </Link>
            </p>
            <p>
              Facebook:&nbsp;
              <Link href={constants.FACEBOOK_LINK} target="_blank">
                {constants.FACEBOOK_LINK_TEXT}
              </Link>
            </p>
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
            <Maps className={styles.mapContainer} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactSection;
