import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import { LAUNDRY_MONITOR_LINK } from "@/app/constants";

const HeroSection = () => {
  return (
    <Container fluid as="section" className={styles.servicesPage}>
      <Container className={styles.servicesPageContents}>
        <div>
          <div className={styles.damingLabahanWagKangMagAParent}>
            <h2 className={styles.damingLabahanWagContainer}>
              <p className={styles.damingLabahan}>Daming labahan?</p>
              <p className={styles.wagKangMagAlala}>Wag kang mag-alala</p>
              <p className={styles.damingLabahan}>kami na maglalaba</p>
            </h2>
            <p className={styles.iwanMoNalang}>
              Iwan mo nalang yung laundry mo kami na mag lalaba, pag balik mo
              ready na yan!
            </p>
            <div className={styles.primaryButton}>
              <Button
                className={styles.monitorNow}
                href={LAUNDRY_MONITOR_LINK}
                target="_blank"
              >
                Go to Laundry Monitor
              </Button>
            </div>
          </div>
          <h3 className={styles.pesosOffForContainer}>
            <b>50 Pesos OFF</b>
            <span className={styles.forFirstTimeOnline}>
              &nbsp;for first-time online users
            </span>
          </h3>
          <p className={styles.pwedeMoNa}>
            Pwede mo din imonitor ang laundry mo para malaman kung pwede mo na
            silang balikan! ;&#41;
          </p>
          <div className={styles.secondaryButton}>
            <Button
              variant="secondary"
              className={styles.monitorNow}
              href={LAUNDRY_MONITOR_LINK}
              target="_blank"
            >
              Monitor Now!
            </Button>
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
