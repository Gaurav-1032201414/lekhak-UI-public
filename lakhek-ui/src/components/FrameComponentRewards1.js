import FrameComponentRewards2 from "./FrameComponentRewards2";
import "../styles/components-css/FrameComponentRewards1.css";

const FrameComponentRewards1 = () => {
  return (
    <div className="frame-divRewards">
      <div className="rectangle-parent1Rewards">
        <div className="frame-child2Rewards" />
        <div className="frame-parent1Rewards">
          <FrameComponentRewards2
            gift="/gift.svg"
            invite="1 Invite"
            get100FreeQueries="Get 100 free queries"
          />
          <div className="frame-parent2Rewards">
            <div className="group-divRewards">
              <div className="frame-child3Rewards" />
              <div className="gift-groupRewards">
                <img className="gift-icon1Rewards" alt="" src="/gift-1.svg" />
                <h3 className="invitesRewards">2 Invites</h3>
              </div>
              <div className="ellipse-containerRewards">
                <div className="frame-child4Rewards" />
              </div>
            </div>
            <div className="frame-wrapper1Rewards">
              <button className="group-buttonRewards">
                <div className="frame-child5Rewards" />
                <div className="get-100-free1Rewards">Get 100 free queries</div>
              </button>
            </div>
          </div>
          <FrameComponentRewards2
            gift="/gift-2.svg"
            invite="3 Invites"
            get100FreeQueries="unlimited queries"
            propPadding="1.188rem 1.188rem 1.438rem 1.813rem"
            propGap="0.5rem"
            propPadding1="0rem 0rem 0rem 0.063rem"
            propMinWidth="6.25rem"
            propPadding2="0rem 1.125rem"
            propWidth="14.875rem"
            propPadding3="0.563rem 1.875rem 0.438rem"
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth1="7.875rem"
          />
          <FrameComponentRewards2
            gift="/gift-3.svg"
            invite="4 Invites"
            get100FreeQueries="Unlimited queries"
            propPadding="1.188rem 1.188rem 1.688rem 1.813rem"
            propGap="0.25rem"
            propPadding1="0rem 0rem 0rem 0.313rem"
            propMinWidth="6.313rem"
            propPadding2="0rem 1.125rem"
            propWidth="unset"
            propPadding3="0.563rem 2.375rem 0.438rem"
            propFlex="unset"
            propDisplay="inline-block"
            propMinWidth1="7.875rem"
          />
        </div>
        <div className="component-instanceRewards">
          <div className="component-3-parentRewards">
            <button className="component-3Rewards">
              <div className="add-to-chromeRewards">
                Link to copy the link and message
              </div>
            </button>
            <div className="invite-friend-who-also-want-to-wrapperRewards">
              <div className="invite-friend-whoRewards">
                Invite friend who also want to get a permanent standard query
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponentRewards1;
