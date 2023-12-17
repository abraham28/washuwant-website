"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.scss";
import * as constants from "@/app/constants";
import { Button } from "react-bootstrap";

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <>
      {constants.NAV_LINKS_ARR.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`${styles.link}${
              pathname === link.path ? ` ${styles.activeLink}` : ""
            }`}
            onClick={onClick}
          >
            {link.name}
          </Link>
        );
      })}
      <Link href={constants.LAUNDRY_MONITOR_LINK} target="_blank">
        <div className={styles.loginButton}>
          <Button>Login/Register</Button>
        </div>
      </Link>
    </>
  );
};

export default NavLinks;
