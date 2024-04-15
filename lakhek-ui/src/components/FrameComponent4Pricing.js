import { useMemo } from "react";
import "../styles/components-css/FrameComponent4Pricing.css";

const FrameComponent4Pricing = ({
  propBorder,
  propPadding,
  propBackground,
  propColor,
}) => {
  const component3Style = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
      background: propBackground,
    };
  }, [propBorder, propPadding, propBackground]);

  const addToChromeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="rectangle-parentPricing">
      <div className="frame-childPricing" />
      <div className="advanced-features-ai-containerPricing">
        <p className="advanced-featuresPricing">Advanced Features</p>
        <ul className="ai-reading-assistant-real-timePricing">
          <li className="ai-reading-assistantPricing">AI Reading Assistant</li>
          <li className="real-time-web-accessPricing">Real-time Web Access</li>
          <li className="ai-writing-assistantPricing">AI Writing Assistant</li>
          <li className="ai-pro-searchPricing">AI Pro Search</li>
          <li className="other-benefitsPricing">Other benefits</li>
          <li className="no-request-limitsPricing">
            No request limits during high-traffic periods
          </li>
          <li className="x-faster-response-speedPricing">
            2X faster response speed
          </li>
          <li>Priority email support</li>
        </ul>
      </div>
      <div className="component-3-wrapperPricing">
        <button className="component-3Pricing" style={component3Style}>
          <div className="add-to-chromePricing" style={addToChromeStyle}>
            Sign in to subscribe
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent4Pricing;
