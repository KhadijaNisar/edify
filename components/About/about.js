import Certificate from "../certificate";
import Plans from "../Plans";
import { aboutt } from "../About/Api";
import { useState } from "react";

const about = () => {
  const [aboutData, setAboutData] = useState(aboutt);
  const [expandedItems, setExpandedItems] = useState([]);
  const aboutTextDiv = "aboutTextDiv";
  const aboutBtnHandler = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const learnMoreBtnHandler = (id) => {
    setExpandedItems([...expandedItems, id]);
  };

  const learnLessBtnHandler = (id) => {
    setExpandedItems(expandedItems.filter((item) => item !== id));
  };

  return (
    <>
      <Certificate></Certificate>
      <div className="outerDiv">
        <div className="aboutOuter">
          <div className="abouterLeft">
            <div data-aos="fade-up" className="aboutImageDiv">
              {/* <img src="image/about/about-1.png" className="aboutImg1"></img>
              <img src="image/about/about-2.png" className="aboutImg2"></img> */}
              <img src="image/about/about.png" className="aboutImg1"></img>
              <img src="image/about/about-4.png" className="aboutImg3"></img>
              {/* <img src="image/about/about-3.png" className="aboutImg4"></img> */}
            </div>
          </div>
          <div className="aboutRight">
            <h2>Why Choose Edify?</h2>
            <p>
              We are unique in the quality of our services and stand out from
              our competitors. Unlike other consultancy firms in Pakistan, we
              truly care for our students. We always strive to give the best
              possible directives and solutions that a student may require. Our
              experienced counsellors and well-trained team of compliance are
              always at hand to assist you in your application aptly. Since we
              understand that college applications encapsulate complex series of
              applications and there is a wide range of consultants to choose
              from, let us tell you why should you choose Edify
            </p>
          </div>
        </div>
        <div className="aboutLowerDiv">
          <div className="about">
            <div className="aboutItem">
              {aboutData.map((element) => {
                console.log(element)
                const isExpanded = expandedItems.includes(element.id);
                return (
                  <>
                    <div className="aboutContEach">
                      <div>
                       <span className="aboutImage">{element.icon}</span>
                      </div>
                      <div className="aboutLowerText">
                        <div
                          className={`${aboutTextDiv} ${
                            isExpanded ? "aboutShowDiv" : ""
                          }`}
                        >
                          <div>
                            <h4>{element.question}</h4>
                            <p>{element.answer}</p>
                          </div>
                        </div>
                        {!isExpanded ? (
                          <button className="learnMoreBtn"
                            onClick={() => learnMoreBtnHandler(element.id)}
                          >
                            Learn More{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        ) : (
                          <button className="learnMoreBtn"
                            onClick={() => learnLessBtnHandler(element.id)}
                          >
                            Learn Less <i className="fa-solid fa-arrow-up"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
