import styles from "@/styles/faq.module.css";
import { useState } from "react";
import { questions } from "./Api";

const Faq = () => {
  const [faqs, setFaqs] = useState(questions);
  const [faq, setFaq] = useState(false);
  const FAQBtn = (id) => {
    console.log(id);
    setFaq(!faq);

    if (faq === id) {
      setFaq(null);
    } else {
      setFaq(id);
    }
  };
  return (
    <>
      <div className="outerDiv">
        <div className="servicesDiv">
          <div className={styles.faqOuter}>
            <span>FAQS</span>
          </div>
          <div className={styles.outFAQ}>
            <div className={styles.faqHeadings}>
              <span>Learn How To Get Started</span>
              <h2>
                Frequently Asked <br></br> Questions
              </h2>
              <p>
                Join our club member community now to get free updates and also
                a lot of freebies are waiting for you or Contact Us
              </p>
              <div className={styles.faqA}>
                <a>Read Our Full FAQ</a>
              </div>
            </div>
            <div>
              <div className={styles.faqOuterDiv}>
                {faqs.map((element, i) => {
                  return (
                    <div
                      className={
                        faq === element.id
                          ? styles.faqNewClass
                          : styles.faqItems
                      }
                      id="faqItems"
                    >
                      <div>
                        <button
                          className={styles.faqBtn}
                          onClick={() => FAQBtn(element.id)}
                        >
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                      <div className={styles.outer}>
                        <div
                          className={`${styles.faqHeadingDiv} ${
                            faq === element.id ? styles.showHeading : ""
                          }`}
                        >
                          <h3>{element.question}</h3>
                          <div
                            className={`${styles.faqDetail} ${
                              faq === element.id ? styles.show : ""
                            }`}
                          >
                            <p>{element.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
