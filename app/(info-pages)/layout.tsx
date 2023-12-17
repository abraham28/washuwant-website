import React from "react";
import Header from "@/components/Header";
import { COPYRIGHT } from "@/app/constants";
import styles from "./layout.module.scss";

export default function InfoPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {children}
        <div className="text-center">{COPYRIGHT}</div>
      </main>
    </>
  );
}
