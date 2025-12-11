"use client";
import React, { useCallback, useEffect, useState } from "react";
import SmallHeader from "./SmallHeader";
import LargeHeader from "./LargeHeader";
import { Container, NavbarBrand } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

import CompanyLogo from "public/images/washuwant-banner.png";
import * as constants from "@/app/constants";

const Header = () => {
  const [isColored, setIsColored] = useState<boolean>(false);

  const listenScrollEvent = useCallback(() => {
    if (window.scrollY > 200) {
      setIsColored(true);
    } else {
      setIsColored(false);
    }
  }, []);

  useEffect(() => {
    const eventName = "scroll";
    window.addEventListener(eventName, listenScrollEvent);

    return () => {
      window.removeEventListener(eventName, listenScrollEvent);
    };
  }, [listenScrollEvent]);

  return (
    <nav
      className={`${styles.navBar} ${
        isColored ? ` ${styles.navBarColored}` : ""
      }`}
    >
      <Container className={styles.innerContainer}>
        <NavbarBrand>
          <Link className={styles.brandLink} href={constants.HOME_ROUTE}>
            <Image
              src={CompanyLogo}
              alt="Wash U Want Logo"
              height={50}
              width={0}
              className="d-inline-block align-text-top"
            />
          </Link>
        </NavbarBrand>
        <SmallHeader />
        <LargeHeader />
      </Container>
    </nav>
  );
};

export default Header;
