import React from "react";
import Header from "@/components/Header";
import { COPYRIGHT } from "@/app/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
      <div className="text-center">{COPYRIGHT}</div>
    </main>
  );
}
