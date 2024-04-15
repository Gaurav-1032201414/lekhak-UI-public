import FrameComponent1 from "../components/FrameComponentRewards1";
import FrameComponent from "../components/FrameComponentRewards";
import OutputCollectorRewards from "../components/OutputCollectorRewards";
import "../styles/Rewards.css";

const Rewards = () => {
  return (
    <div className="rewardsRewards">
      <section className="frame-parentRewards">
        <div className="frame-groupRewards">
          <header className="lekhak-parentRewards">
            {/* <h1 className="lekhakRewards">Lekhak</h1>
            <div className="home-assistant-writer-pricing-wrapperRewards">
              <div className="homeRewards">Home</div>
              <div className="assistantRewards">Assistant</div>
              <div className="writerRewards">Writer</div>
              <div className="reward-parentRewards">
                <div className="rewardRewards">Reward</div>
                <div className="vector-wrapperRewards">
                  <img
                    className="frame-childRewards"
                    loading="lazy"
                    alt=""
                    src="/line-10.svg"
                  />
                </div>
              </div>
              <div className="pricingRewards">Pricing</div>
            </div> */}
            <div className="output-collector-parent">
              <OutputCollectorRewards />
            </div>
          </header>
          <div className="max-invites-labelRewards">
            <div className="invite-to-earn-parentRewards">
              <h1 className="invite-to-earnRewards">Invite to earn!</h1>
              <div className="get-100-free-queries-for-each-wrapperRewards">
                <h1 className="get-100-free-containerRewards">
                  <span>{`Get `}</span>
                  <span className="free-queriesRewards">100 free queries</span>
                  <span> for each invite</span>
                </h1>
              </div>
            </div>
            <h1 className="invite-as-muchRewards">{`Invite as much friends as you can `}</h1>
          </div>
          <FrameComponent1 />
          <div className="rectangle-parentRewards">
            <div className="frame-itemRewards" />
            <img
              className="frame-innerRewards"
              loading="lazy"
              alt=""
              src="/ellipse-70@2x.png"
            />
            <div className="wrapper-group-2985-parentRewards">
              <div className="wrapper-group-2985Rewards">
                <img
                  className="wrapper-group-2985-childRewards"
                  alt=""
                  src="/group-2985.svg"
                />
              </div>
              <h1 className="and-get-unlimitedRewards">
                and get unlimited rewards for free, forever!
              </h1>
            </div>
            <img
              className="frame-iconRewards"
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
          </div>
        </div>
        <button className="copy-link-labelRewards">
          <div className="copy-the-inviteRewards">Copy the invite link</div>
        </button>
      </section>
      <FrameComponent />
      <div className="nemo-enim-ipsam-voluptatem-qui-wrapperRewards">
        <div className="nemo-enim-ipsam-containerRewards">
          <span>{`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia `}</span>
          <span className="contact-usRewards">contact us</span>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
