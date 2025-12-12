import React from "react";
import Link from "next/link";
import { COPYRIGHT } from "@/app/constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>{COPYRIGHT}</p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <span className={styles.separator}>|</span>
          <Link href="/terms-and-conditions" className={styles.footerLink}>
            Terms and Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
