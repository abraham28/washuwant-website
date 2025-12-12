import React from "react";
import { Container } from "react-bootstrap";
import type { Metadata } from "next";
import styles from "./page.module.scss";
import { COMPANY_NAME } from "@/app/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Wash U Want - Learn how we collect, use, and protect your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <Container fluid as="section" className={styles.wrapper}>
      <Container className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: January 2025</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to {COMPANY_NAME}. We are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name and contact information (phone number, email address)</li>
            <li>Physical address for service delivery</li>
            <li>
              Payment information (processed securely through third-party
              providers)
            </li>
            <li>Communication preferences</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information, including:
          </p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our laundry services</li>
            <li>Process transactions and send related information</li>
            <li>
              Send you service updates, promotional materials, and other
              communications
            </li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with
              third-party service providers who perform services on our behalf
              (e.g., payment processing, website hosting)
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information
              if required by law or in response to valid requests by public
              authorities
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your experience. You can set your browser to refuse cookies,
            but this may limit some functionality of our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to review their privacy policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            become aware that a child has provided us with personal information,
            please contact us.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:thelaundrytruth@gmail.com">
                thelaundrytruth@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> (+63) 976-253-1732
            </li>
            <li>
              <strong>Address:</strong> 042 Pugong Ginto St. Brgy. Santa Monica,
              Novaliches, Quezon City
            </li>
          </ul>
        </section>
      </Container>
    </Container>
  );
};

export default PrivacyPolicyPage;
