import Testimonial from "./testimonial";

const team = () => {
  return (
    <>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h3 className="breadCrumbTitle">Our Team</h3>
        <div className="breadCrumbList">Home {`>`} Team</div>
      </div>
      <div className="outerDiv">
        <div className="team_Outer_Div">
          <div className="team_Inner_Div">
            <div className="team_Item">
              <div className="team_Thumbs">
                <div className="team_Shape">
                  <img src="image/team/team-shape-1.png"></img>
                  {/* <img src="image/team/team-sm-1.png"></img> */}
                </div>
                  <img src="image/team/team-sm-1.png"></img>
                <div className="team_Social_Transitions">
                  <a className="fb">
                    <i class="fa-brands fa-facebook-f" ></i>
                  </a>
                  <a className="tw">
                    <i class="fa-brands fa-twitter" ></i>
                  </a>
                  <a className="linked">
                    <i class="fa-brands fa-linkedin-in" ></i>
                  </a>
                  <a className="pin">
                    <i class="fa-brands fa-pinterest-p" ></i>
                  </a>
                </div>
              </div>
              <div className="team_Content">
                <h3>Mellisa Johns</h3>
                <span>Professor</span>
              </div>
            </div>
            <div className="team_Item">
              <div className="team_Thumbs">
                <div className="team_Shape">
                  <img src="image/team/team-shape-2.png"></img>
                </div>
                <div className="team_Img">
                  <img src="image/team/team-sm-2.png"></img>
                </div>
                <div className="team_Social_Transitions">
                <a className="fb">
                    <i class="fa-brands fa-facebook-f" ></i>
                  </a>
                  <a className="tw">
                    <i class="fa-brands fa-twitter" ></i>
                  </a>
                  <a className="linked">
                    <i class="fa-brands fa-linkedin-in" ></i>
                  </a>
                  <a className="pin">
                    <i class="fa-brands fa-pinterest-p" ></i>
                  </a>
                </div>
              </div>
              <div className="team_Content">
                <h3>Mellisa Johns</h3>
                <span>Professor</span>
              </div>
            </div>
            <div className="team_Item">
              <div className="team_Thumbs">
                <div className="team_Shape">
                  <img src="image/team/team-shape-3.png"></img>
                </div>
                <div className="team_Img">
                  <img src="image/team/team-sm-3.png"></img>
                </div>
                <div className="team_Social_Transitions">
                <a className="fb">
                    <i class="fa-brands fa-facebook-f" ></i>
                  </a>
                  <a className="tw">
                    <i class="fa-brands fa-twitter" ></i>
                  </a>
                  <a className="linked">
                    <i class="fa-brands fa-linkedin-in" ></i>
                  </a>
                  <a className="pin">
                    <i class="fa-brands fa-pinterest-p" ></i>
                  </a>
                </div>
              </div>
              <div className="team_Content">
                <h3>Mellisa Johns</h3>
                <span>Professor</span>
              </div>
            </div>
            <div className="team_Item">
              <div className="team_Thumbs">
                <div className="team_Shape">
                  <img src="image/team/team-shape-4.png"></img>
                </div>
                <div className="team_Img">
                  <img src="image/team/team-sm-4.png"></img>
                </div>
                <div className="team_Social_Transitions">
                <a className="fb">
                    <i class="fa-brands fa-facebook-f" ></i>
                  </a>
                  <a className="tw">
                    <i class="fa-brands fa-twitter" ></i>
                  </a>
                  <a className="lin">
                    <i class="fa-brands fa-linkedin-in" ></i>
                  </a>
                  <a className="pin">
                    <i class="fa-brands fa-pinterest-p" ></i>
                  </a>
                </div>
              </div>
              <div className="team_Content">
                <h3>Mellisa Johns</h3>
                <span>Professor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial></Testimonial>
    </>
  );
};

export default team;
