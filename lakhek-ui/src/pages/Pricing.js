import FrameComponent3Pricing from "../components/FrameComponent3Pricing";
import FrameComponent2Pricing from "../components/FrameComponent2Pricing";
import FrameComponent1Pricing from "../components/FrameComponent1Pricing";
import FrameComponentPricing from "../components/FrameComponentPricing";
import "../styles/Pricing.css";
import GroupComponent from "../components/GroupComponentPricing";

const Pricing = () => {
  return (
    <div className="pricingPricing">
      <img
        className="pricing-childPricing"
        loading="lazy"
        alt=""
        src="/rectangle-747.svg"
      />
      <img
        className="pricing-itemPricing"
        loading="lazy"
        alt=""
        src="/rectangle-1245.svg"
      />
      <img
        className="pricing-innerPricing"
        loading="lazy"
        alt=""
        src="/rectangle-1246.svg"
      />
      <section className="frame-parentPricing">
        <FrameComponent3Pricing />
        <FrameComponent2Pricing />
      </section>
      <div className="div3Pricing">$325</div>
      <div className="div4Pricing">$100</div>
      <div className="div5Pricing">$200</div>
      <div className="monthsPricing">6 months</div>
      <div className="months1Pricing">9 months</div>
      <div className="months2Pricing">3 months</div>
      <section className="frame-sectionPricing">
        <div className="frame-groupPricing">
          <div className="difference-between-lekhak-ch-wrapperPricing">
            <h1 className="difference-between-lekhakPricing">{`Difference Between Lekhak & ChatGPT`}</h1>
          </div>
          <FrameComponent1Pricing />
          <FrameComponentPricing />
          <GroupComponent />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
