import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <Footer />
      </main>
    </>
  );
}
