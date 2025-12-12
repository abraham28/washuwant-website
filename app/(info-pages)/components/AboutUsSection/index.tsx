import React from "react";
import { Container } from "react-bootstrap";
import styles from "./AboutUsSection.module.scss";
import { TAGLINE } from "@/app/constants";

const AboutUsSection = () => {
  return (
    <Container fluid as="section" className={styles.wrapper} id="about">
      <Container className={styles.container}>
        <h2>About Us</h2>
        <div className={styles.content}>
          <p className={styles.intro}>
            Wash U Want is your trusted laundry service provider in Novaliches,
            Quezon City.
          </p>
          <p>
            We understand that life gets busy, and laundry can be time-consuming.
            That&apos;s why we&apos;re here to help! Our mission is simple:{" "}
            <strong>{TAGLINE}</strong>
          </p>
          <p>
            Whether you need our full-service wash, dry, and fold package or prefer
            to use our self-service facilities, we&apos;re committed to providing
            quality laundry services that save you time and give you peace of mind.
          </p>
          <p>
            Visit us at our location in Santa Monica, Novaliches, and experience
            the convenience of professional laundry care.
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default AboutUsSection;

