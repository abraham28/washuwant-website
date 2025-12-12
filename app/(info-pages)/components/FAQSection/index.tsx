"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./FAQSection.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Ano gamit na sabon at fabcon?",
    answer:
      "Personal Collection na sabon at Fabcon kasi long lasting ung scent nya.",
  },
  {
    question: "Ano ung cologne na ini-spray bago i-fold?",
    answer: "Lavander Scent na Laundry Spray.",
  },
  {
    question: "Pano natatanggal mga stains at amoy?",
    answer:
      "Sa amoy, maganda gumamit ng Zonrox Violet isasabay sya sa pag sasabon. Sa stains, minsan bago isalang, kinukusot muna un para sure na malilinisan talaga kumbaga minsan charity na un ng staff, minsan naman kung willing si customer mag bayad ng manual wash.",
  },
  {
    question: "Ilang hrs o days bago makuha ung pinalaba?",
    answer:
      "Usually basta within the day makukuha din naman agad, wag lang 6pm onwards dalhin. Pag ganun next day salang na un.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container fluid as="section" className={styles.wrapper} id="faq">
      <Container className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList} role="list">
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem} role="listitem">
              <button
                className={styles.questionButton}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span
                  className={`${styles.icon} ${
                    openIndex === index ? styles.iconOpen : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`${styles.answer} ${
                  openIndex === index ? styles.answerOpen : ""
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default FAQSection;
