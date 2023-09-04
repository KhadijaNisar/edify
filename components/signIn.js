const signIn = () => {
  return (
    <>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h3 className="breadCrumbTitle">Sign In</h3>
        <div className="breadCrumbList">Home {`>`} Sign In</div>
      </div>
      <div className="outerDiv">
        <div className="signIn_Outer_Div">
          <div className="sign_In_Shape">
            <img src="image/sign/man-3.png" className="man1"></img>
            <img src="image/sign/man-2.png" className="man2"></img>
            <img src="image/sign/circle.png" className="circle"></img>
            <img src="image/sign/zigzag.png" className="zigzag"></img>
            <img src="image/sign/dot.png" className="dot"></img>
            <img src="image/sign/sign-up.png" className="sign_Up"></img>
            <img src="image/sign/flower.png" className="flower"></img>
          </div>
          <div className="sign_In_Inner">
            <div className="sign_In_Heading">
              <h2>
                Sign in to <br></br>recharge direct.
              </h2>
              <p>it you dont have an account you can Register here!</p>
            </div>
            <div className="sign_In_Lower">
              <div className="sign_In_Wrapper">
                {/* <div className="sign_In_Header">
                  <a className="sign_In_Google">
                    <i class="fa-brands fa-google-plus-g" className="g_Plus"></i>
                    Sign Up With Google
                  </a>
                  <p><span>..........</span>  Or, sign up with your email  <span>..........</span></p>
                </div> */}
                <div className="sign_In_Form">
                  <form>
                    <div className="sign_In_Input_Outer">
                          <h5>Work Email</h5>
                          <div className="sign_In_Input">
                              <input type="email" placeholder="e-mail address"></input>
                              <i class="fa-regular fa-envelope"></i> 
                          </div>
                    </div>
                    <div className="sign_In_Input_Outer">
                          <h5>Password</h5>
                          <div className="sign_In_Input">
                              <input type="password" placeholder="Password"></input>
                              <i class="fa-solid fa-lock"></i>
                          </div>
                    </div>
                    <div className="sign_In_Action">
                        <div className="signAgree">
                            <input type="checkbox"></input>
                            <label>Keep me Signed In</label>
                        </div>
                        <div className="sign_In_Forgot">
                            <button>Forgot your Password?</button>
                        </div>
                    </div>
                    <button type="submit" className="signInSubmitBtn">Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signIn;
