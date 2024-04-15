import FrameComponent4Pricing from "./FrameComponent4Pricing";
import "../styles/components-css/FrameComponent3Pricing.css";

const FrameComponent3Pricing = () => {
  return (
    <div className="frame-containerPricing">
      <div className="frame-wrapperPricing">
        <div className="frame-divPricing">
          <header className="frame-headerPricing">
            <div className="lekhak-parentPricing">
              <h2 className="lekhakPricing">Lekhak</h2>
              <div className="frame-wrapper1Pricing">
                <div className="home-parentPricing">
                  <div className="homePricing">Home</div>
                  <div className="assistantPricing">Assistant</div>
                  <div className="writerPricing">Writer</div>
                  <div className="rewardPricing">Reward</div>
                  <div className="pricing-parentPricing">
                    <div className="pricing1Pricing">Pricing</div>
                    <div className="vector-wrapperPricing">
                      <img
                        className="frame-itemPricing"
                        loading="lazy"
                        alt=""
                        src="/line-10.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="boost-up-your-productivity-wit-parentPricing">
            <h1 className="boost-up-yourPricing">
              Boost up your productivity with Lekhak
            </h1>
            <div className="we-offer-one-of-the-most-cost-wrapperPricing">
              <div className="we-offer-onePricing">
                We offer one of the most cost-effective solutions in the market!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-groupPricing">
        <div className="frame-innerPricing" />
        <img
          className="ellipse-iconPricing"
          loading="lazy"
          alt=""
          src="/ellipse-70@2x.png"
        />
        {/* <div className="wrapper-group-2985Pricing">
          <img
            className="wrapper-group-2985-childPricing"
            alt=""
            src="/group-2985.svg"
          />
        </div> */}
      </div>
      <div className="frame-parent1Pricing">
        <FrameComponent4Pricing />
        <FrameComponent4Pricing
          propBorder="none"
          propPadding="0.563rem 3.438rem"
          propBackground="linear-gradient(85.69deg, #00dbde, #fc00ff)"
          propColor="#fff"
        />
        <FrameComponent4Pricing
          propBorder="1px solid #00dbde"
          propPadding="0.563rem 3.375rem"
          propBackground="unset"
          propColor="#00dbde"
        />
      </div>
    </div>
  );
};

export default FrameComponent3Pricing;
