import { useMemo } from "react";
import "../styles/components-css/FrameComponentRewards2.css";

const FrameComponentRewards2 = ({
  gift,
  invite,
  get100FreeQueries,
  propPadding,
  propGap,
  propPadding1,
  propMinWidth,
  propPadding2,
  propWidth,
  propPadding3,
  propFlex,
  propDisplay,
  propMinWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const inviteStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding2,
      width: propWidth,
    };
  }, [propPadding2, propWidth]);

  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding3,
      flex: propFlex,
    };
  }, [propPadding3, propFlex]);

  const get100FreeStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className="frame-containerRewards">
      <div className="rectangle-groupRewards" style={frameDivStyle}>
        <div className="rectangle-divRewards" />
        <div className="gift-parentRewards" style={frameDiv1Style}>
          <img className="gift-iconRewards" loading="lazy" alt="" src={gift} />
          <div className="invite-wrapperRewards" style={frameDiv2Style}>
            <h3 className="inviteRewards" style={inviteStyle}>
              {invite}
            </h3>
          </div>
        </div>
        <div className="ellipse-wrapperRewards">
          <div className="ellipse-divRewards" />
        </div>
      </div>
      <div className="frame-wrapperRewards" style={frameDiv3Style}>
        <button className="rectangle-containerRewards" style={groupButtonStyle}>
          <div className="frame-child1Rewards" />
          <div className="get-100-freeRewards" style={get100FreeStyle}>
            {get100FreeQueries}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponentRewards2;
