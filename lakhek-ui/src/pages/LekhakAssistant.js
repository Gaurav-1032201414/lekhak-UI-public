import "../styles/LekhakAssistant.css";

const LekhakAssistant = () => {
  return (
    <div className="lekhak-assistant">
      <div className="lekhak-wrapper">
        <h1 className="lekhak">Lekhak</h1>
      </div>
      <div className="frame-wrapper-assistant">
        <div className="home-parent-assistant">
          <div className="home">Home</div>
          <div className="assistant-parent">
            <div className="assistant">Assistant</div>
            <div className="home-writer-reward-pricing-lab">
              <img
                className="home-writer-reward-pricing-lab-child"
                loading="lazy"
                alt=""
                src="/line-10.svg"
              />
            </div>
          </div>
          <div className="writer">Writer</div>
          <div className="reward">Reward</div>
          <div className="pricing">Pricing</div>
        </div>
      </div>
      <div className="rectangle-parent-assistant">
        <div className="frame-child-assistant" />
        <div className="log-in-assistant">Log In</div>
        <div className="sign-up-assistant">Sign Up</div>
      </div>
      <img className="delete-icon" alt="" src="/delete.svg" />
      <section className="lekhak-assistant-inner">
        <div className="frame-group-assistant">
          <div className="frame-container-assistant">
            <div className="frame-div">
              <div className="be-the-lekhak-of-your-own-stor-parent">
                <h1 className="be-the-lekhak">
                  Be the Lekhak of your own story
                </h1>
                <div className="add-screenshots-of-your-chats-wrapper">
                  <div className="add-screenshots-of">
                    Add screenshots of your chats or add voice notes or you can
                    paste chats manually!
                  </div>
                </div>
              </div>
            </div>
            <form className="frame-form">
              <div className="frame-parent1-assistant">
                <div className="frame-wrapper1-assistant">
                  <div className="frame-parent2-assistant">
                    <input className="frame-item" type="text" />
                    <div className="personalization">Personalization</div>
                  </div>
                </div>
                <div className="frame-parent3-assistant">
                  <div className="arrow-down-2-wrapper">
                    <img
                      className="arrow-down-2"
                      loading="lazy"
                      alt=""
                      src="/arrow--down-2.svg"
                    />
                  </div>
                  <button className="frame-button-assistant">
                    <div className="rectangle-wrapper">
                      <div className="frame-inner-assistant" />
                    </div>
                    <div className="chat-summary">Chat summary</div>
                  </button>
                </div>
              </div>
              <div className="frame-parent4-assistant">
                <div className="frame-wrapper2-assistant">
                  <div className="frame-parent5-assistant">
                    <input className="group-input" type="text" />
                    <div className="custom-instructions-assistant">
                      Custom Instructions
                    </div>
                  </div>
                </div>
                <div className="frame-parent6-assistant">
                  <div className="arrow-down-3-wrapper">
                    <img
                      className="arrow-down-3"
                      loading="lazy"
                      alt=""
                      src="/arrow--down-3.svg"
                    />
                  </div>
                  <button className="frame-parent7-assistant">
                    <div className="rectangle-container-assistant">
                      <div className="rectangle-div" />
                    </div>
                    <div className="chat-explanation">Chat Explanation</div>
                  </button>
                </div>
              </div>
            </form>
            <div className="frame-wrapper3-assistant">
              <div className="frame-parent8-assistant">
                <div className="frame-wrapper4-assistant">
                  <div className="ellipse-parent">
                    <div className="ellipse-div" />
                    <img
                      className="plus-line-icon-1"
                      loading="lazy"
                      alt=""
                      src="/pluslineicon-1.svg"
                    />
                  </div>
                </div>
                <div className="rectangle-group-assistant">
                  <div className="frame-child1-assistant" />
                  <div className="amon-deserunt-ullamco">
                    Amon deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit.
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent9-assistant">
              <div className="rectangle-parent1-assistant">
                <div className="frame-child2-assistant" />
                <div className="amet-minim-mollit">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.z
                </div>
              </div>
              <div className="plus-button-wrapper">
                <div className="plus-button">
                  <div className="plus-button-child" />
                  <img
                    className="plus-line-icon-2"
                    loading="lazy"
                    alt=""
                    src="/pluslineicon-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="general-suggestions-wrapper">
            <div className="general-suggestions">
              <button className="image-input">
                <div className="general-suggestions1">General Suggestions</div>
                <div className="light-bulb-wrapper">
                  <img
                    className="light-bulb-icon"
                    alt=""
                    src="/light-bulb.svg"
                  />
                </div>
              </button>
              <div className="renew-symbol">
                <img
                  className="image-add-icon"
                  loading="lazy"
                  alt=""
                  src="/image-add.svg"
                />
              </div>
              <div className="keyboard-wrapper">
                <img
                  className="keyboard-icon"
                  loading="lazy"
                  alt=""
                  src="/keyboard.svg"
                />
              </div>
              <div className="language-wrapper">
                <img
                  className="language-icon"
                  loading="lazy"
                  alt=""
                  src="/language.svg"
                />
              </div>
              <div className="keyboard-layout">
                <img
                  className="renew-icon"
                  loading="lazy"
                  alt=""
                  src="/renew.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LekhakAssistant;
