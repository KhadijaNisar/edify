const Contact = () => {
  return (
    <>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h3 className="breadCrumbTitle">Contact</h3>
        <div className="breadCrumbList">Home {`>`} Contact</div>
      </div>
      <div className="outerDiv">
        <div className="contact_Outer_Div">
          <div className="contact_Upper_Div">
            <div className="contact_Left_Div">
              <div className="contact_Title">
                <h2>Get In Touch</h2>
                <p>
                  Have a Question or just want to say hi? We'd love to hear from
                  you
                </p>
              </div>
              <div className="contact_Form">
                <form>
                  <div className="contactFormTop">
                    <div className="contact_Form_Input">
                      <input type="text" placeholder="Your Name"></input>
                    </div>
                    <div className="contact_Form_Input">
                      <input type="email" placeholder="Your Email"></input>
                    </div>
                  </div>
                  <div className="contact_Form_Input">
                    <input type="text" placeholder="Subject"></input>
                  </div>
                  <div className="contact_Form_Input">
                    <textarea placeholder="Enter your Message"></textarea>
                  </div>
                  <div className="contact_Form_Agree">
                    <input required type="checkbox"></input>
                    <label>I agree to the Terms & Conditions</label>
                  </div>
                  <div className="contact_Btn">
                    <button type="submit">Send Your Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact_Right_Div">
              <div className="contact_Right_Inner">
                <div className="inner_List_Cont">
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="location_Details">
                      <h4>New York Office</h4>
                      <p>Maypole Crescent 70-80</p>
                      <p>Upper St Norwich NR2 1LT</p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Email us directly</h4>
                      <p>support@educal.com</p>
                      <p>info@educal.com</p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Phone</h4>
                      <p>+(426) 742 26 44</p>
                      <p>+(224) 762 442 32</p>
                    </div>
                  </div>
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
      <div className="contact_Lower_Div">
        <div className="contact_Lower_Inner">
          <div className="contact_Lower_Left">
            <div className="lower_Icon_Cont">
              <i class="fa-regular fa-face-smile"></i>
            </div>
            <div className="lower_Content_Cont">
              <h3>Knowledge Base</h3>
              <p>
                My good sir plastered cuppa barney cobblers mush argy bargy
                ruddy.
              </p>
              <a className="view_Btn">View Documentation</a>
            </div>
          </div>
          <div className="contact_Lower_Left">
            <div className="lower_Icon_Cont">
            <i class="fa-regular fa-message"></i>
            </div>
            <div className="lower_Content_Cont">
              <h3>Online Support</h3>
              <p>
                My good sir plastered cuppa barney cobblers mush argy bargy
                ruddy.
              </p>
              <a className="view_Btn">Send a Ticket</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
