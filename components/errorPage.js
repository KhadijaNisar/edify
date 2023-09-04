const errorPage = () => {
  return (
    <>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h3 className="breadCrumbTitle">Error Page</h3>
        <div className="breadCrumbList">Home {`>`} Error</div>
      </div>
      <div className="outerDiv">
        <div className="error_Page_Outer">
          <div className="error_Page_Inner">
            <div className="error_Cotent">
              <div className="error_Thumb">
                <img src="image/error/error.png"></img>
              </div>
              <div className="error_Con">
                <h3>Page Not Found</h3>
                <p>
                  Oops! The page you are looking for does not exist. It might
                  have been moved or deleted.
                </p>
                <div className="error_Btn">
                  <a href="/">Back to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default errorPage;
