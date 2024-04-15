import "../styles/components-css/ConditionSplitter.css";

import Circle1 from "../images/Vector.png";
import Circle2 from "../images/Vector (1).png";
import Circle3 from "../images/Vector (2).png";
import Circle4 from "../images/Layer 2.png";

const ConditionSplitter = () => {
  return (
    <section className="condition-splitter1">
      <div className="input-filter1" />
      <div className="condition-splitter-inner">
        <div className="frame-parent5">
          <div className="features-wrapper">
            <h1 className="features">Features</h1>
          </div>
          <h3 className="lekhak-showcased-visually">{`Lekhak showcased visually, emphasizing its capabilities for chat suggestions, poems & story writing`}</h3>
        </div>
      </div>
      <div className="frame-parent6">
        <div className="matrix-multiplier-parent">
          <div className="matrix-multiplier">
            <div className="matrix-multiplier-child" />
            <div className="rectangle-parent2">
              <div className="frame-child6" />
              <img
                className="edit-chat-icon"
                loading="lazy"
                alt=""
                src={Circle1}
              />
            </div>
            <div className="input-collector">
              <b className="lekhak-assistantHome">Lekhak Assistant</b>
              <div className="nemo-enim-ipsam">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur
              </div>
            </div>
          </div>
          <div className="rectangle-parent3">
            <div className="frame-child7" />
            <div className="connection-manager">
              <div className="connection-manager-child" />
              <img
                className="chrome-icon1"
                loading="lazy"
                alt=""
                src={Circle2}
              />
            </div>
            <div className="chrome-extension-parent">
              <b className="chrome-extension">Chrome extension</b>
              <div className="nemo-enim-ipsam1">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur
              </div>
            </div>
          </div>
        </div>
        <div className="error-handler-parent">
          <div className="error-handler">
            <div className="error-handler-child" />
            <div className="rectangle-parent4">
              <div className="frame-child8" />
              <img
                className="email-icon"
                loading="lazy"
                alt=""
                src={Circle3}
              />
            </div>
            <div className="email-reply-parent">
              <b className="email-reply">Email Reply</b>
              <div className="nemo-enim-ipsam2">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur
              </div>
            </div>
          </div>
          <div className="rectangle-parent5">
            <div className="frame-child9" />
            <div className="connection-manager">
              <div className="connection-manager-child" />
              <img
                className="chrome-icon1"
                loading="lazy"
                alt=""
                src={Circle4}
              />
            </div>
            <div className="frame-wrapper2">
              <div className="writer-parent">
                <b className="writer">Writer</b>
                <div className="nemo-enim-ipsam3">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionSplitter;
