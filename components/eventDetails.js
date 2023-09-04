const eventDetails = () => {
  return (
    <>
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
              <img src="image/event-1.jpg"></img>
            </div>
            <div className="event_Details">
              <h3>Description</h3>
              <p>
                He legged it up the kyver have it mush super me old mucker
                cheeky naff that are you taking the piss, blow off down the pub
                bite your arm off the wireless boot cor blimey guvnor happy days
                bender what a load of rubbish, say pardon me horse play spiffing
                Why car boot gosh bubble and squeak. Cheers Richard bugger show
                off show off pick your nose and blow off get stuffed mate
                chancer in my flat loo, bevvy amongst hunky-dory bender bubble
                and squeak me old mucker vagabond, barmy spend a penny chimney
                pot young delinquent bum bag the bees knees chap, gosh nice one
                knees up the wireless Charles such a fibber. Mush barmy bleeding
                Jeffrey pardon me barney grub loo cup of tea bubble and squeak
                bugger all mate say, I bloke matie boy tickety-boo give us a
                bell up the duff bugger lurgy wind up I dont want no agro.
              </p>
            </div>
            <div className="event_Allow">
              <h3>This event will allow participants to: </h3>
              <div className="list_Outer_Div">
                <div className="list_Div">
                  <i class="fa-solid fa-check"></i>
                  Business managers, leaders
                </div>
                <div className="list_Div">
                  <i class="fa-solid fa-check"></i>
                  Downloadable lectures, code and design assets for all projects
                </div>
                <div className="list_Div">
                  <i class="fa-solid fa-check"></i>
                  Anyone who is finding a chance to get the promotion
                </div>
              </div>
            </div>
            <div className="event_Tag">
            <span><i class="fa-solid fa-tag"></i></span>
            Big  Data, Data Analysis , Data Modeling
            </div>
          </div>

          <div className="ourCoursesRight">
            <div className="coursesSidebar">
              <div className="courseMeta">
                <div className="coursePrice">
                  <h5>$74.00</h5>
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
                        <span>End: </span>July 26, 2022 12:30 am
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-solid fa-house"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Time: </span>10:45 AM-01:30 PM
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="courseVideoIcon">
                      <i class="fa-solid fa-house"></i>
                    </div>
                    <div className="courseVideoInfo">
                      <h5>
                        <span>Venu: </span>New York, TX 82760, US
                      </h5>
                    </div>
                  </li>
                </uL>
              </div>
              <button className="enroll_Btn">
                Enroll <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="coursesLowerSideBar">
              <div className="relatedCourses">
                <h3>Sponsors</h3>
                <div className="event_Sponsor_Thumb">
                  <img src="image/sponsor-logo.png"></img>
                </div>
                <div className="event_Sponsor_Info">
                  <h3>Thomas R. Toe</h3>
                  <h4>
                    Email: <span>support@educal.com</span>
                  </h4>
                  <div className="event_Social_Icons">
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
                      <div></div>
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
};

export default eventDetails;
