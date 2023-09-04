import { useState } from "react";
import { courses } from "../OurCourses/Api";
import CourseDescription from "./courseDescription";
import CourseReview from "./courseReview";
import CourseMembers from "./courseMembers";
import CourseCurriculum from "./courseCurriculum";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ourCourses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows:false,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const [componentName, setComonentName] = useState("CourseDescription");
  const [course, setCourse] = useState(courses);
  const [expandedItems, setExpandedItems] = useState([1]);
  const [isExpanded, setIsExpanded] = useState(false);
  const coursesBtnHandler = (id = 1) => {
    // setIsExpanded(!isExpanded);
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([id]);
    }
    if (id === 1) {
      setComonentName("CourseDescription");
    }
    if (id === 2) {
      setComonentName("CourseCurriculum");
    }
    if (id === 3) {
      setComonentName("CourseReview");
    }
    if (id === 4) {
      setComonentName("CourseMembers");
    }
  };

  return (
    <>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h3 className="breadCrumbTitle">Our Title</h3>
        <div className="breadCrumbList">Home {`>`} Courses</div>
      </div>
      <div className="outerDiv">
        <div className="ourCoursesOuter">
          <div className="ourCoursesLeft">
            <div className="">Home {`>`} Courses</div>
            <div className="ourCourseTitle">Digital</div>
            <h2 className="courseMainTitle">
              University Seminar Series Global
            </h2>
            <div className="coursesDetails">
              <div className="coursesTeacher">
                <div className="courseTeacherImg">
                  <img src="image/courseTutor/course-tutor-1.jpg"></img>
                </div>
                <div className="courseTeacherInfo">
                  <h5>Teacher</h5>
                  <p>Brian Cumin</p>
                </div>
              </div>
              <div className="coursesUpdate">
                <h5>Last Update</h5>
                <p>31 August 2023</p>
              </div>
              <div className="coursesRatings">
                <h5>Review</h5>
                <div className="courseRating">
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
            </div>
            <div className="courseRelatedImage">
              <img src="image/courses/courses-1.jpg"></img>
            </div>
            <div className="coursesTabs">
              <ul>
                {course.map((element) => {
                  return (
                    <li
                      className={`${
                        expandedItems.includes(element.id)
                          ? "courseBtn1"
                          : "courseBtn2"
                      }`}
                    >
                      <button onClick={() => coursesBtnHandler(element.id)}>
                        {element.icon} {element.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            {componentName === "CourseDescription" && <CourseDescription />}
            {componentName === "CourseReview" && <CourseReview />}
            {componentName === "CourseMembers" && <CourseMembers />}
            {componentName === "CourseCurriculum" && <CourseCurriculum />}
            <div className="shareIcons">
              <h3>Share:</h3>
              <div className="shareIconsInner">
                <div className="fb">
                  <i class="fa-brands fa-facebook-f "></i>
                </div>
                <div className="tw">
                  <i class="fa-brands fa-twitter "></i>
                </div>
                <div className="pin">
                  <i class="fa-brands fa-pinterest-p "></i>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className="relatedCoursesLeft">
              <div className="relatedCoursesTitle">
                <h2>Related Course</h2>
                <p>
                  You dont have to struggle alone, you have got our assistance
                  and help.
                </p>
              </div>

              <Slider {...settings}>
                <div className="Course_Main_slider_Parent">
                  <div className="relatedCourseSlider">
                    <div className="relatedCourseImg">
                      <img src="image/courses/course-1.jpg"></img>
                    </div>
                    <div className="relatedBtmContent">
                      <div className="relatedCourseTop">
                        <div className="rcoursesTag">
                          <a>Digital</a>
                        </div>
                        <div className="rcoursesPrice">
                          <span>$74</span>
                        </div>
                      </div>
                      <div className="relatedCoursesT">
                        <h3>University Seminar Series Globe...</h3>
                      </div>
                      <div className="relatedCourseBottom">
                        <div className="courseAction">
                          <ul>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-user"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-eye"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-star"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>4.5</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="courseTutor">
                          <img src="image/coursetutor/course-tutor-1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Course_Main_slider_Parent">
                  <div className="relatedCourseSlider">
                    <div className="relatedCourseImg">
                      <img src="image/courses/course-2.jpg"></img>
                    </div>
                    <div className="relatedBtmContent">
                      <div className="relatedCourseTop">
                        <div className="rcoursesTag">
                          <a>Digital</a>
                        </div>
                        <div className="rcoursesPrice">
                          <span>$74</span>
                        </div>
                      </div>
                      <div className="relatedCoursesT">
                        <h3>University Seminar Series Globe...</h3>
                      </div>
                      <div className="relatedCourseBottom">
                        <div className="courseAction">
                          <ul>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-user"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-eye"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-star"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>4.5</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="courseTutor">
                          <img src="image/coursetutor/course-tutor-1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Course_Main_slider_Parent">
                  <div className="relatedCourseSlider">
                    <div className="relatedCourseImg">
                      <img src="image/courses/course-3.jpg"></img>
                    </div>
                    <div className="relatedBtmContent">
                      <div className="relatedCourseTop">
                        <div className="rcoursesTag">
                          <a>Digital</a>
                        </div>
                        <div className="rcoursesPrice">
                          <span>$74</span>
                        </div>
                      </div>
                      <div className="relatedCoursesT">
                        <h3>University Seminar Series Globe...</h3>
                      </div>
                      <div className="relatedCourseBottom">
                        <div className="courseAction">
                          <ul>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-user"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-eye"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-star"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>4.5</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="courseTutor">
                          <img src="image/coursetutor/course-tutor-1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Course_Main_slider_Parent">
                  <div className="relatedCourseSlider">
                    <div className="relatedCourseImg">
                      <img src="image/courses/course-4.jpg"></img>
                    </div>
                    <div className="relatedBtmContent">
                      <div className="relatedCourseTop">
                        <div className="rcoursesTag">
                          <a>Digital</a>
                        </div>
                        <div className="rcoursesPrice">
                          <span>$74</span>
                        </div>
                      </div>
                      <div className="relatedCoursesT">
                        <h3>University Seminar Series Globe...</h3>
                      </div>
                      <div className="relatedCourseBottom">
                        <div className="courseAction">
                          <ul>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-user"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-eye"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-star"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>4.5</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="courseTutor">
                          <img src="image/coursetutor/course-tutor-1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Course_Main_slider_Parent">
                  <div className="relatedCourseSlider">
                    <div className="relatedCourseImg">
                      <img src="image/courses/course-1.jpg"></img>
                    </div>
                    <div className="relatedBtmContent">
                      <div className="relatedCourseTop">
                        <div className="rcoursesTag">
                          <a>Digital</a>
                        </div>
                        <div className="rcoursesPrice">
                          <span>$74</span>
                        </div>
                      </div>
                      <div className="relatedCoursesT">
                        <h3>University Seminar Series Globe...</h3>
                      </div>
                      <div className="relatedCourseBottom">
                        <div className="courseAction">
                          <ul>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-user"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-eye"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-star"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>4.5</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="courseTutor">
                          <img src="image/coursetutor/course-tutor-1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Course_Main_slider_Parent">
                  <div className="relatedCourseSlider">
                    <div className="relatedCourseImg">
                      <img src="image/courses/course-2.jpg"></img>
                    </div>
                    <div className="relatedBtmContent">
                      <div className="relatedCourseTop">
                        <div className="rcoursesTag">
                          <a>Digital</a>
                        </div>
                        <div className="rcoursesPrice">
                          <span>$74</span>
                        </div>
                      </div>
                      <div className="relatedCoursesT">
                        <h3>University Seminar Series Globe...</h3>
                      </div>
                      <div className="relatedCourseBottom">
                        <div className="courseAction">
                          <ul>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-user"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-eye"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>20k</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="courseActionItem">
                                <div className="courseActionIcon">
                                  <span>
                                    <i class="fa-regular fa-star"></i>
                                  </span>
                                </div>
                                <div className="courseActionContent">
                                  <span>4.5</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="courseTutor">
                          <img src="image/coursetutor/course-tutor-1.jpg"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>

            </div>
          </div>

          <div className="ourCoursesRight">
            <div className="coursesSidebar">
              <div className="coursesVideo">
                <div className="courseVideoThumb">
                  <div className="courseVideoThum">
                    <img src="image/coursesVideo/course-video.jpg"></img>
                  </div>
                  <div className="courseVideoPlay">
                    <button>
                      <i class="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="courseMeta">
                <div className="coursePrice">
                  <h5>$74</h5>
                </div>
                <div className="courseDiscount">
                  <span>On Sale</span>
                </div>
              </div>
              <div className="courseVideoContent">
                <uL>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-solid fa-house"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Instructor: </span>Brian Cumin
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-solid fa-book"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Lectures: </span>14
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-regular fa-clock"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Duration: </span>6 Weeks
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-regular fa-user"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Enrolled: </span>20k Students
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-solid fa-globe"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Language: </span>English
                      </h5>
                    </div>
                  </li>
                </uL>
              </div>
              <div className="coursePayment">
                <h3>Payment:</h3>
                <a>
                  <img src="image/courses/payment-1.png"></img>
                </a>
              </div>
              <button className="addCourseBtn">
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button className="addCourseBtn">
                Login To Buy <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="coursesLowerSideBar">
              <div className="relatedCourses">
                <h3>Related Courses</h3>
                <div className="related_Courses_Outer_Div">
                <div className="relatedCourseDetails">
                      <div className="relatedCourseImage">
                        <img src="image/courses/course-2.jpg"></img>
                      </div>
                      <div className="relatedCourseContent">
                        <div className="relatedCourseRating">
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
                          <h5>Mechanical</h5>
                        </div>
                        <div className="relatedCoursePrice">
                          <span>$120</span>
                        </div>
                      </div>
                </div>
                <div className="relatedCourseDetails">
                      <div className="relatedCourseImage">
                        <img src="image/courses/course-3.jpg"></img>
                      </div>
                      <div className="relatedCourseContent">
                        <div className="relatedCourseRating">
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
                          <h5>Design Thinking</h5>
                        </div>
                        <div className="relatedCoursePrice">
                          <span>$130</span>
                        </div>
                      </div>
                </div>
                <div className="relatedCourseDetails">
                      <div className="relatedCourseImage">
                        <img src="image/courses/course-4.jpg"></img>
                      </div>
                      <div className="relatedCourseContent">
                        <div className="relatedCourseRating">
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
                          <h5>Photography</h5>
                        </div>
                        <div className="relatedCoursePrice">
                          <span>$140</span>
                        </div>
                      </div>
                </div>
                </div>
                {/* <ul>
                  <li>
                    <div className="relatedCourseDetails">
                      <div className="relatedCourseImage">
                        <img src="image/courses/course-2.jpg"></img>
                      </div>
                      <div className="relatedCourseContent">
                        <div className="relatedCourseRating">
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
                          <h5>Mechanical</h5>
                        </div>
                        <div className="relatedCoursePrice">
                          <span>$120</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relatedCourseDetails">
                      <div className="relatedCourseImage">
                        <img src="image/courses/course-3.jpg"></img>
                      </div>
                      <div className="relatedCourseContent">
                        <div className="relatedCourseRating">
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
                          <h5>Design Thinking</h5>
                        </div>
                        <div className="relatedCoursePrice">
                          <span>$130</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relatedCourseDetails">
                      <div className="relatedCourseImage">
                        <img src="image/courses/course-4.jpg"></img>
                      </div>
                      <div className="relatedCourseContent">
                        <div className="relatedCourseRating">
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
                          <h5>Photography</h5>
                        </div>
                        <div className="relatedCoursePrice">
                          <span>$140</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ourCourses;
