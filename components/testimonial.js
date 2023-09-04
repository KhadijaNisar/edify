import styles from "@/styles/testimonial.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="outerDiv">
        <div className={styles.testimonials}>
          <div className={styles.testimonialsTop}>
            <span>Testimonials</span>
            <h3>What our Customers Say</h3>
          </div>
          <Slider {...settings}>
            <div className={styles.testimonialItems}>
              <div className={styles.testimonialAvatar}>
                <img src="image/testimonial/testimonial-1.jpg"></img>
              </div>
              <div className={styles.avatarText}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus feugiat lacus vitae neque ornare.
                </p>
              </div>
              <div className={styles.avatarInfo}>
                <h3>Dianne Ameter</h3>
                <span>UX Designer</span>
              </div>
              <div className={styles.avatarRating}>
                <ul>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.testimonialItems}>
              <div className={styles.testimonialAvatar}>
                <img src="image/testimonial/testimonial-1.jpg"></img>
              </div>
              <div className={styles.avatarText}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus feugiat lacus vitae neque ornare.
                </p>
              </div>
              <div className={styles.avatarInfo}>
                <h3>Dianne Ameter</h3>
                <span>UX Designer</span>
              </div>
              <div className={styles.avatarRating}>
                <ul>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.testimonialItems}>
              <div className={styles.testimonialAvatar}>
                <img src="image/testimonial/testimonial-1.jpg"></img>
              </div>
              <div className={styles.avatarText}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus feugiat lacus vitae neque ornare.
                </p>
              </div>
              <div className={styles.avatarInfo}>
                <h3>Dianne Ameter</h3>
                <span>UX Designer</span>
              </div>
              <div className={styles.avatarRating}>
                <ul>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.testimonialItems}>
              <div className={styles.testimonialAvatar}>
                <img src="image/testimonial/testimonial-1.jpg"></img>
              </div>
              <div className={styles.avatarText}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus feugiat lacus vitae neque ornare.
                </p>
              </div>
              <div className={styles.avatarInfo}>
                <h3>Dianne Ameter</h3>
                <span>UX Designer</span>
              </div>
              <div className={styles.avatarRating}>
                <ul>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.testimonialItems}>
              <div className={styles.testimonialAvatar}>
                <img src="image/testimonial/testimonial-1.jpg"></img>
              </div>
              <div className={styles.avatarText}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus feugiat lacus vitae neque ornare.
                </p>
              </div>
              <div className={styles.avatarInfo}>
                <h3>Dianne Ameter</h3>
                <span>UX Designer</span>
              </div>
              <div className={styles.avatarRating}>
                <ul>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.testimonialItems}>
              <div className={styles.testimonialAvatar}>
                <img src="image/testimonial/testimonial-1.jpg"></img>
              </div>
              <div className={styles.avatarText}>
                <h4>Great Quality!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit.
                  Phasellus feugiat lacus vitae neque ornare.
                </p>
              </div>
              <div className={styles.avatarInfo}>
                <h3>Dianne Ameter</h3>
                <span>UX Designer</span>
              </div>
              <div className={styles.avatarRating}>
                <ul>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        class="fa-solid fa-star"
                        style={{ color: "#ffaa2c" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default testimonial;
