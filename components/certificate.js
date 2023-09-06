import styles from "@/styles/certificate.module.css";

const certificate = () => {
  return (
    <>
      <div className="outerDiv">
        <div className={styles.certificateOuter}>
          <div className={styles.certificateContent}>
            <span>About Educal</span>
            <h2>
              We Are One <br></br> Stop-Shop For All <br></br> Your Applications
            </h2>{" "}
            <br></br>
            <p>
              Edify has been a one stop solution for all your Study Abroad
              ambitions since 2016. We help students simplify and plan their
              study abroad aspirations with personalized consultations.{" "}
              <br></br> <br></br>
              Edify aims to give all students accurate facts and guidelines to
              help them make informative decisions. We provide a platform for
              studying in some of the leading and wide ranged universities in
              Australia, Canada, UK, USA and Sweden.
              <br></br> <br></br> Our team is eager to help you today for you to
              excel tomorrow. We welcome you to unlock your true potential with
              Edify.
            </p>
          </div>
          <div className={styles.certificateImg}>
            <img src="image/certificate/certificate.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default certificate;
