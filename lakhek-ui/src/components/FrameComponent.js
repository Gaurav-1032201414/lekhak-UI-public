import FrameComponent1 from "./FrameComponent1";
import "../styles/components-css/FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="frame-wrapper7">
      <div className="frame-parent13">
        <div className="frame-parent14">
          <div className="welcome-to-lekhak-wrapper">
            <h1 className="welcome-to-lekhak">Welcome to “Lekhak”</h1>
          </div>
          <div className="be-the-lekhak1">
            Be the Lekhak of your own story" with personalized chat suggestions
            based on your unique style and preferences for your conversations
          </div>
        </div>
        <FrameComponent1 />
      </div>
    </div>
  );
};

export default FrameComponent;
