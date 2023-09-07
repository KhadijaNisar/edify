import Certificate from "./certificate";
import styles from "@/styles/Services.module.css";
import { useState } from "react";

const headings = [
  {
    id: 1,
    text: "An Australian qualification holds immense value in the job market. Employers in Australia, as well as globally, recognize the high standards of education and skills acquired by students studying in Australia. We understand the significance of an Australian qualification in making our students highly attractive potential employees, both within Australia and internationally.Australia offers an exceptional study abroad experience, with a thriving student community, top-ranked universities, government scholarships, work experience opportunities, and global employability prospects. As Overseas Education Consultants, Edify Group of Companies is dedicated to helping students explore the advantages of studying in Australia and achieve their educational and career goals.",
    icon: <i class="fa-solid fa-book"></i>,
    heading: "Modern Curicullum",
  },
  {
    id: 2,
    text: "An Australian qualification holds immense value in the job market. Employers in Australia, as well as globally, recognize the high standards of education and skills acquired by students studying in Australia. We understand the significance of an Australian qualification in making our students highly attractive potential employees, both within Australia and internationally.Australia offers an exceptional study abroad experience, with a thriving student community, top-ranked universities, government scholarships, work experience opportunities, and global employability prospects. As Overseas Education Consultants, Edify Group of Companies is dedicated to helping students explore the advantages of studying in Australia and achieve their educational and career goals.",
    icon: <i class="fa-regular fa-clock"></i>,
    heading: "Fee Schedule",
  },
  {
    id: 3,
    text: "An Australian qualification holds immense value in the job market. Employers in Australia, as well as globally, recognize the high standards of education and skills acquired by students studying in Australia. We understand the significance of an Australian qualification in making our students highly attractive potential employees, both within Australia and internationally.Australia offers an exceptional study abroad experience, with a thriving student community, top-ranked universities, government scholarships, work experience opportunities, and global employability prospects. As Overseas Education Consultants, Edify Group of Companies is dedicated to helping students explore the advantages of studying in Australia and achieve their educational and career goals.",
    icon: <i class="fa-solid fa-bookmark"></i>,
    heading: "Semester I to IV",
  },
  {
    id: 4,
    text: "An Australian qualification holds immense value in the job market. Employers in Australia, as well as globally, recognize the high standards of education and skills acquired by students studying in Australia. We understand the significance of an Australian qualification in making our students highly attractive potential employees, both within Australia and internationally.Australia offers an exceptional study abroad experience, with a thriving student community, top-ranked universities, government scholarships, work experience opportunities, and global employability prospects. As Overseas Education Consultants, Edify Group of Companies is dedicated to helping students explore the advantages of studying in Australia and achieve their educational and career goals.",
    icon: <i class="fa-solid fa-person"></i>,
    heading: "Main Teachers",
  },
];
const destinations = () => {
  const [isOpen, setIsOpen] = useState(1);
  const destinationChoice = (id) => {
    console.log(isOpen);
    setIsOpen(!isOpen);

    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };
  return (
    <>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h3 className="breadCrumbTitle">Destinations</h3>
        <div className="breadCrumbList">Home {`>`} Destinations</div>
      </div>
      <Certificate></Certificate>
      <div className="outerDiv">
        <div
          className={styles.servicesOuter}
          style={{ marginTop: "100px", marginBottom: "100PX" }}
        >
          <div className={`${styles.servicesItems2} ${styles.servicesItem}`}>
            <div
              className={`${styles.servicesIcon} ${styles.forthserviceIcons}`}
            >
              <img src="image/services/4.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Visa Application Assistance</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  We help you in entire Visa process like, filling up
                  applications, preparing financial statements, and also
                  guidance and training for mock interviews and much more. We
                  are regularly advised by the consulates about the latest Visa
                  documentation and rules and have a success rate of over 90%.
                  Visa Guidance is Free for all Edify’s clients for all
                  countries.
                </p>
              </div>
              <div className={styles.serialNo}>1</div>
            </div>
          </div>
          <div className={`${styles.servicesItems3} ${styles.servicesItem}`}>
            <div
              className={`${styles.servicesIcon} ${styles.fifthServiceIcon}`}
            >
              <img src="image/services/5.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Pre- Departure Orientation</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Prior to landing in a new country of your choice appropriate
                  guidance is provided to help you migrate, travel & settle
                  abroad. The same provides an opportunity to meet other
                  students and their parents who are heading abroad and possibly
                  to the same university. We also provide an extremely updated &
                  comprehensive Pre-Departure Brochure to every student prior to
                  their travel.
                </p>
              </div>
              <div className={styles.serialNo}>2</div>
            </div>
          </div>
          <div className={`${styles.servicesItems4} ${styles.servicesItem}`}>
            <div
              className={`${styles.servicesIcon} ${styles.sixthServiceIcon}`}
            >
              <img src="image/services/6.webp"></img>
            </div>
            <div className={styles.servicesContent}>
              <div className={styles.servicesHeading}>
                <h1>Language Test Preparation</h1>
              </div>
              <div className={styles.servicesText}>
                <p>
                  Here, at Edify, one of our expertise lies in preparing
                  students for the IELTS test. We, on our hands, provide all
                  that you need; preparation materials and even British Council
                  Certified Trainer. So, without any further delay, get yourself
                  enrolled in IELTS test preparation at Edify. Apart from IELTS,
                  we also prepare students for Duolingo, PTE, TOEFL, IELTS UKVI,
                  IELTS Life Skills and IELTS General Training.
                </p>
              </div>
              <div className={styles.serialNo}>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="destinationDiv">
        <div className="outerDiv">
          <div className="destination_Outer_Div">
            <div className="destination_Header_Div">
              <h1>
                Let Us Be Your Compass in <br></br> the World of Immigration
              </h1>
              <p>
                We have in-depth knowledge of the complex immigration systems,
                regulations, and <br></br> processes of various countries.
              </p>
            </div>
            <div className="destination_Inner_Div">
              <div className="destination_Inner_Item">
                <img src="image/destinations/handshake.png"></img>
                <h3>Initial Consultation and Assessment</h3>
                <p>
                  The first step in providing exceptional customer service is
                  conducting an initial consultation and assessment.
                </p>
              </div>
              <div className="destination_Image_Div">
                <img src="image/destinations/plane.png"></img>
              </div>
              <div className="destination_Inner_Item">
                <img src="image/destinations/handshake.png"></img>
                <h3>Initial Consultation and Assessment</h3>
                <p>
                  The first step in providing exceptional customer service is
                  conducting an initial consultation and assessment.
                </p>
              </div>
              <div className="destination_Image_Div">
                <img src="image/destinations/plane.png"></img>
              </div>
              <div className="destination_Inner_Item">
                <img src="image/destinations/handshake.png"></img>
                <h3>Initial Consultation and Assessment</h3>
                <p>
                  The first step in providing exceptional customer service is
                  conducting an initial consultation and assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="destination_Div">
        <div className="outerDiv">
          <div className="destination_Outer_Div">
            <div className="destination_Header_Div">
              <h1>Why Study In Australia</h1>
              <p>
                Australia is currently home to nearly 700,000 international
                students, making it a highly sought-after destination for
                education. As Study Abroad Consultants, we recognize the
                numerous advantages that Australia offers to students seeking
                quality education and global opportunities.
              </p>
            </div>

            <div className="destination_Tab_Div">
              {headings.map((item, index) => (
                <>
                  <div
                    className={`destination_Tab_Heading ${
                      isOpen === item.id ? "open" : ""
                    }`} 
                  >
                    <div    className={`destination_Each_Head ${
                      isOpen === item.id ? "destination_Each_Heading" : ""
                    }`}  >
                      <button onClick={() => destinationChoice(item.id)}>
                        <a>{item.icon}</a>
                        <h3>{item.heading}</h3>
                      </button>
                    </div>
                  </div>
                  {isOpen === item.id && (
                    <div className="destination_Description open">
                      <p>{item.text}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default destinations;
