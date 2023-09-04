
import React from "react";
import styles from "@/styles/Services.module.css";
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Livvic:ital,wght@0,300;1,300&family=Poppins:ital,wght@0,400;1,200&family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
const Services = () => {
  return (
    <>
      <div className="outerDiv">
        <div className={styles.servicesDiv}>
          {/* <h3>Our Services</h3>
           */}
           <span>Our Services</span>
          <h2>
            We Strive to Provide the Finest Service Possible to Our Students
          </h2>
          <p className={styles.outerDivP}>
            Edify consultant provides A to Z services for student visa in major
            universities and colleges of the countries around the globe, when
            student come with dream of studying abroad. We are the place he/she
            starts with selection of subject and institution end up with
            successful completion of their proposed study program. We are
            committed to ensuring that students receive a worthwhile, productive
            and high-quality education.
          </p>
          <div className={styles.servicesOuter}>
          <div className={`${styles.servicesItem} ${styles.servicesItems}`}>
            <div className={styles.servicesIcon}>
              <img className={styles.img} src="image/services/1.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Counselling</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  1
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItem} ${styles.servicesItems}`}>
            <div className={`${styles.servicesIcon} ${styles.secondServiceIcon}`}>
              <img src="image/services/2.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Admission Guidance</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  2
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItem} ${styles.servicesItems}`}>
            <div className={`${styles.servicesIcon} ${styles.thirdServiceIcon}`}>
              <img src="image/services/3.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>University Selection</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  3
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItems2} ${styles.servicesItem}`}>
            <div className={`${styles.servicesIcon} ${styles.forthserviceIcons}`}>
              <img src="image/services/4.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Visa Application Assistance</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  4
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItems3} ${styles.servicesItem}`}>
            <div className={`${styles.servicesIcon} ${styles.fifthServiceIcon}`}>
              <img src="image/services/5.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Pre- Departure Orientation</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  5
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItems4} ${styles.servicesItem}`}>
            <div className={`${styles.servicesIcon} ${styles.sixthServiceIcon}`}>
              <img src="image/services/6.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Language Test Preparation</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  6
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItems5} ${styles.servicesItem}`}>
            <div className={styles.servicesIcon}>
              <img src="image/services/7.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Travel Assistance</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  7
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItems6} ${styles.servicesItem}`}>
            <div className={`${styles.servicesIcon} ${styles.secondServiceIcon}`}>
              <img src="image/services/9.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Post-Departure Support</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  8
              </div>
            </div>
          </div>
          <div className={`${styles.servicesItems7} ${styles.servicesItem}`}>
            <div className={`${styles.servicesIcon} ${styles.thirdServiceIcon}`}>
              <img src="image/services/6.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Counselling</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Applying for studies abroad is a huge decision and that is why
                  we do not limit our counselling to just choosing the right
                  country and right university but extend it to makingthe right
                  ‘career decision’.Our educational counsellors first try to
                  understand your educational background and your career
                  objectives and then suggest programs in the countries and
                  universities suiting your preferences.
                </p>
              </div>
              <div className={styles.serialNo}>
                  9
              </div>
            </div>
          </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Services;
