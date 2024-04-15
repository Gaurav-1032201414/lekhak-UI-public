import "../styles/components-css/OutputCollectorRewards.css";
import Line from "../images/icons8-line-22.png";

const OutputCollectorRewards = () => {
  return (
    <header className="output-collectorRewards">
      <div className="lekhak-containerRewards">
        <h1 className="lekhak1Rewards">Lekhak</h1>
      </div>
      <div className="output-collector-innerRewards">
        <div className="frame-parent10Rewards">
          <div className="home-parentRewards">
            <div className="homeRewards">Home</div>
            <div className="vector-wrapperRewards">
              <img className="line-iconRewards" alt="" src={Line} />
            </div>
          </div>
          <div className="assistantRewards">Assistant</div>
          <div className="writer1Rewards">Writer</div>
          <div className="rewardRewards">Reward</div>
          <div className="pricing1Rewards">Pricing</div>
        </div>
      </div>
      <div className="frame-parent11Rewards">
        {/* <div className="log-in-wrapperRewards">
          <button className="log-inRewards">Log In</button>
        </div>
        <button className="frame-buttonRewards">
          <div className="frame-child17Rewards" />
          <div className="sign-upRewards">Sign Up</div>
        </button> */}
              
      </div>
    </header>
  );
};

export default OutputCollectorRewards;
