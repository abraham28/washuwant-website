import React from "react";
import { Container } from "react-bootstrap";
import styles from "./PricingSection.module.scss";
import Card from "../Card";

const PricingSection = () => {
  return (
    <Container fluid as="section" className={styles.wrapper} id="pricing">
      <Container className={styles.container}>
        <h1>Pricing</h1>
        <div className={styles.cards}>
          <Card
            title="Full Package"
            price="₱188"
            imageSrc="/images/full-package.png"
            inclusions={[
              "Wash",
              "Dry",
              "Fold",
              "Laundry Detergent",
              "Fabric Conditioner",
              "Fabric Cologne",
            ]}
          />
          <Card
            title="Self Service"
            price="₱128"
            imageSrc="/images/diy.png"
            inclusions={[
              "Wash",
              "Dry",
              { name: "Fold", excluded: true },
              { name: "Laundry Detergent", excluded: true },
              { name: "Fabric Conditioner", excluded: true },
              { name: "Fabric Cologne", excluded: true },
            ]}
          />
        </div>
      </Container>
    </Container>
  );
};

export default PricingSection;
