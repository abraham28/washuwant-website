import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./CTASection.module.scss";
import { FACEBOOK_LINK } from "@/app/constants";

const CTASection = () => {
  return (
    <Container fluid as="section" className={styles.wrapper}>
      <Container className={styles.container}>
        <h2>Ready to Get Started?</h2>
        <p className={styles.description}>
          Visit our Facebook page to book your laundry service, see our latest
          updates, and connect with us!
        </p>
        <Button
          href={FACEBOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          size="lg"
        >
          Visit Us on Facebook
        </Button>
      </Container>
    </Container>
  );
};

export default CTASection;
