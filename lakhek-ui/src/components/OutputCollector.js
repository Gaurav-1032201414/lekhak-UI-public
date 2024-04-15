import "../styles/components-css/OutputCollector.css";
import Line from "../images/icons8-line-22.png";

const OutputCollector = () => {
  return (
    <header className="output-collector">
      <div className="lekhak-container">
        <h1 className="lekhak1">Lekhak</h1>
      </div>
      <div className="output-collector-inner">
        <div className="frame-parent10">
          <div className="home-parent">
            <div className="home">Home</div>
            <div className="vector-wrapper">
              <img className="line-icon" alt="" src={Line} />
            </div>
          </div>
          <div className="assistant">Assistant</div>
          <div className="writer1">Writer</div>
          <div className="reward">Reward</div>
          <div className="pricing1">Pricing</div>
        </div>
      </div>
      <div className="frame-parent11">
        <div className="log-in-wrapper">
          <button className="log-in">Log In</button>
        </div>
        <button className="frame-button">
          <div className="frame-child17" />
          <div className="sign-up">Sign Up</div>
        </button>
      </div>
    </header>
  );
};

export default OutputCollector;
