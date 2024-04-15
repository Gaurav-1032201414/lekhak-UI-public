import "../styles/components-css/ErrorMessage.css";
import Star from "../images/stars_404.png";
import astroid from "../images/astroid.png";

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <div className="frame-group">
        <div className="wrapper">
          <div className="div">404</div>
        </div>
        <div className="sorry-page-could">Sorry, page could not found</div>
      </div>
      <div className="group-parent-error">
        <img className="group-icon1" alt="" src={Star} />
              <img className="group-icon2" loading="lazy" alt="" src={astroid} />
      </div>
      <div className="go-back-button">
        <button className="home-button">
          <div className="go-back-to">Go back to home</div>
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
