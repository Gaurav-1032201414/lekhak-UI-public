import { useMemo } from "react";
import "../styles/components-css/FrameComponent1.css";
import chromeIcon from "../images/icons8-chrome-29.png";

const FrameComponent1 = ({ propPadding, propBackgroundColor, propColor }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const addToChromeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="frame-wrapper6" style={frameDivStyle}>
      <button className="frame-parent12" style={frameButtonStyle}>
        <div className="chrome-wrapper">
          <img
            className="chrome-icon2"
            alt=""
            src={ chromeIcon }
          />
        </div>
        <div className="add-to-chrome2" style={addToChromeStyle}>
          Add to chrome - it’s free
        </div>
      </button>
    </div>
  );
};

export default FrameComponent1;
