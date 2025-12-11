import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import { PRICING_ROUTE } from "@/app/constants";

const HeroSection = () => {
  return (
    <Container fluid as="section" className={styles.servicesPage}>
      <Container className={styles.servicesPageContents}>
        <div>
          <div className={styles.damingLabahanWagKangMagAParent}>
            <h1 className={styles.damingLabahanWagContainer}>
              <p className={styles.damingLabahan}>Daming labahan?</p>
              <p className={styles.wagKangMagAlala}>Wag kang mag-alala</p>
              <p className={styles.damingLabahan}>kami na maglalaba</p>
            </h1>
            <p className={styles.iwanMoNalang}>
              Iwan mo nalang yung laundry mo kami na mag lalaba, pag balik mo
              ready na yan!
            </p>
          </div>
          <div className={styles.primaryButton}>
            <Button href={PRICING_ROUTE}>View Pricing</Button>
          </div>
        </div>
        <div>
          <Image
            width={800}
            height={800}
            src={"/images/lady-carrying-laundry.png"}
            alt="Image of person carrying Laundry"
            className={styles.graphic}
          />
        </div>
      </Container>
    </Container>
  );
};

export default HeroSection;
