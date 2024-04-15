import "../styles/components-css/FrameComponent2Pricing.css";

const FrameComponent2Pricing = () => {
  return (
    <div className="frame-wrapper2Pricing">
      <div className="rectangle-containerPricing">
        <div className="rectangle-divPricing" />
        <button className="annually-wrapperPricing">
          <div className="annuallyPricing">Annually</div>
        </button>
        <button className="group-buttonPricing">
          <div className="frame-child1Pricing" />
          <div className="monthlyPricing">Monthly</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2Pricing;
