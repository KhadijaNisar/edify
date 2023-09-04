import styles from "@/styles/faq.module.css";
import { FontAwesomeIcon, faXmark } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FAQItem = ({id,question,answer}) => {
  const [faq, setFaq] = useState(false);
  const FAQBtn = (id) => {
    console.log(id)
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
         <div className={styles.outFAQ}>
            <div className={styles.faqOuterDiv}>
            <div
              className={faq ? styles.faqNewClass : styles.faqItems}
              id="faqItems"
            >
              <div><button className={styles.faqBtn} onClick={()=>FAQBtn(id) }>
                <i class="fa-solid fa-xmark"></i>
              </button></div>
              <div className={styles.outer}>
                <div className={`${styles.faqHeadingDiv} ${faq?styles.showHeading :""}`}>
                  <h3>{question}</h3>
                  <div
                    className={`${styles.faqDetail} ${faq ? styles.show : ""}`}
                  >
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default FAQItem