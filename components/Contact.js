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
                <h2>Faisalabad Office (Head Branch)</h2>
                <p>
                  Have a Question or just want to say hi? We'd love to hear from
                  you
                </p>
              </div>
              <div className="contact_Form">
                {/* <form>
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
                </form> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9509206756757!2d73.10905927537843!3d31.41547827426209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226940221cbeb9%3A0x87aed33b83a332bd!2sEdify%20College%20of%20IT!5e0!3m2!1sen!2s!4v1693997894019!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                      <h4>Faisalabad Office</h4>
                      <p>Edify Building, 3rd Floor, S1/S2 </p>
                      <p>Susan Road, Madina Town</p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Email us directly</h4>
                      <p>junaid.sohail@edify.pk </p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Phone</h4>
                      <p>041 8501893</p>
                      <p>0321 6667540</p>
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
          <div className="contact_Upper_Div" style={{marginTop: "120px"}}>
            <div className="contact_Left_Div">
              <div className="contact_Title">
                <h2>Lahore Office</h2>
                <p>
                  Have a Question or just want to say hi? We'd love to hear from
                  you
                </p>
              </div>
              <div className="contact_Form">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8881420060775!2d74.37362897538094!3d31.472263074235972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bb918bb056b%3A0xf03c21bf9329dbcd!2sEdify%20Group%20Lahore%20DHA%20Branch!5e0!3m2!1sen!2s!4v1693999359423!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                      <h4>Lahore Office</h4>
                      <p>1st Floor Plaza No. Y-213,</p>
                      <p> DHA Phase 3, Near ChenOne</p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Email us directly</h4>
                      <p>bilal@edify.pk </p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Phone</h4>
                      <p>042 35747733</p>
                      <p>0300 8888542</p>
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
          <div className="contact_Upper_Div" style={{marginTop: "120px"}}>
            <div className="contact_Left_Div">
              <div className="contact_Title">
                <h2>Multan Office</h2>
                <p>
                  Have a Question or just want to say hi? We'd love to hear from
                  you
                </p>
              </div>
              <div className="contact_Form">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110339.36326940285!2d71.37506165452257!3d30.20554756639374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3394097d4c95%3A0x5ac46e3ccb3de69e!2sEdify%20Group%20Multan%20Branch!5e0!3m2!1sen!2s!4v1693999838488!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                      <h4>Multan Office</h4>
                      {/* Twin Tower 10-A, Tehsil Chowk near Masoom’s Cafe Gulgasht, Bosan Road, Multan */}
                      <p>Twin Tower 10-A, Tehsil Chowk</p>
                      <p>near Masoom’s Cafe Gulgasht, Bosan Road, Multan</p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Email us directly</h4>
                      <p>azhar@edify.pk</p>
                    </div>
                  </div>
                  <div className="location_Contact">
                    <div className="contact_Icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="location_Details">
                      <h4>Phone</h4>
                      <p>061 6210066</p>
                      <p>0321 8888220</p>
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
