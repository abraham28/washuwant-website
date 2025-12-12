import React from "react";
import { Container } from "react-bootstrap";
import type { Metadata } from "next";
import styles from "./page.module.scss";
import { COMPANY_NAME } from "@/app/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Wash U Want - Read our service terms, policies, and user agreements.",
};

const TermsAndConditionsPage = () => {
  return (
    <Container fluid as="section" className={styles.wrapper}>
      <Container className={styles.container}>
        <h1>Terms and Conditions</h1>
        <p className={styles.lastUpdated}>Last Updated: January 2025</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services of {COMPANY_NAME}, you accept
            and agree to be bound by the terms and provision of this agreement.
            If you do not agree to these Terms and Conditions, please do not use
            our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services Description</h2>
          <p>
            Wash U Want provides laundry services including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Full Package:</strong> Wash, dry, fold, and fabric care
              services
            </li>
            <li>
              <strong>Self Service:</strong> Access to washing and drying
              machines for customer use
            </li>
            <li>Additional services as may be offered from time to time</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Service Availability</h2>
          <p>
            Our services are available during our operating hours: 8 AM to 8 PM,
            Monday through Sunday. Self-service cut-off time is 6 PM. Drop-off
            and pick-up services are available until 8 PM.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Pricing and Payment</h2>
          <ul>
            <li>Full Package: ₱200 per load</li>
            <li>Self Service: ₱140 per load</li>
            <li>Prices are subject to change without prior notice</li>
            <li>
              Payment is due upon service completion or as otherwise agreed
            </li>
            <li>We accept cash and other payment methods as indicated</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Customer Responsibilities</h2>
          <p>Customers are responsible for:</p>
          <ul>
            <li>
              Inspecting items before drop-off and reporting any existing damage
              or special care requirements
            </li>
            <li>
              Removing items from pockets and personal belongings before
              submitting laundry
            </li>
            <li>Providing accurate contact information for service updates</li>
            <li>
              Picking up items within a reasonable time after notification of
              completion
            </li>
            <li>Following our guidelines for self-service equipment usage</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Care and Handling</h2>
          <p>
            We take reasonable care in handling your laundry items. However:
          </p>
          <ul>
            <li>
              We are not responsible for damage to items that are not suitable
              for standard washing procedures
            </li>
            <li>
              Delicate items, leather, suede, or items requiring special care
              should be disclosed at drop-off
            </li>
            <li>
              We use Personal Collection detergents and fabric conditioners, and
              Lavander Scent Laundry Spray
            </li>
            <li>
              While we take precautions, we cannot guarantee removal of all
              stains
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Turnaround Time</h2>
          <p>
            Standard turnaround time is within the same day for items dropped
            off before 6 PM. Items dropped off after 6 PM will be processed the
            next day. Turnaround times may vary during peak periods or for
            special care items.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Lost or Damaged Items</h2>
          <ul>
            <li>
              We are not liable for items left in pockets or personal belongings
              that may be damaged or lost during processing
            </li>
            <li>
              Claims for lost or damaged items must be reported within 24 hours
              of pickup
            </li>
            <li>
              Our liability is limited to the replacement value of the item, not
              exceeding the service fee paid
            </li>
            <li>
              We are not responsible for items left unclaimed for more than 30
              days
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Unclaimed Items</h2>
          <p>
            Items not picked up within 30 days of completion may be disposed of
            or donated at our discretion. We will make reasonable efforts to
            contact customers before disposing of unclaimed items.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Prohibited Items</h2>
          <p>The following items are not accepted for service:</p>
          <ul>
            <li>Items contaminated with hazardous materials</li>
            <li>Items with strong odors from chemicals or other substances</li>
            <li>
              Items that may damage our equipment or other customers&apos; items
            </li>
            <li>Any items we reasonably determine to be unsafe to process</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>11. Cancellation and Refunds</h2>
          <ul>
            <li>
              Services may be cancelled before processing begins for a full
              refund
            </li>
            <li>
              Once processing has begun, refunds are at our discretion and may
              be partial
            </li>
            <li>
              Refund requests must be made within 24 hours of service completion
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>12. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {COMPANY_NAME} shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from your use of our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {COMPANY_NAME}, its owners,
            employees, and agents from any claims, damages, losses, liabilities,
            and expenses (including legal fees) arising out of or relating to
            your use of our services or violation of these Terms and Conditions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be effective immediately upon posting on our
            website. Your continued use of our services after changes are posted
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>15. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the Philippines, without regard to its
            conflict of law provisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>16. Contact Information</h2>
          <p>
            For questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditionsPage;
