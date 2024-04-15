import Booleans from "./Booleans";
import "../styles/components-css/Paths.css";

const Paths = () => {
  return (
    <section className="paths">
      <div className="shapes">
        <div className="images-parent">
          <div className="images">
            <h1 className="be-a-lekhak">Be a Lekhak</h1>
          </div>
          <h3 className="be-the-lekhakHome">Be the Lekhak of your own story</h3>
        </div>
      </div>
      <div className="plugins">
        <div className="custom">
          <div className="floats">
            <Booleans arrays="1" />
            <div className="matrices">
              <b className="add-screenshot">Add Screenshot</b>
              <div className="add-screenshot-easily">
                Add Screenshot: Easily upload chat screenshots to receive
                personalized suggestions directly.
              </div>
            </div>
          </div>
          <div className="points">
            <Booleans
              arrays="3"
              propPadding="0rem 0.063rem"
              propPadding1="0.938rem 1.875rem 0.875rem 2.063rem"
              propMinWidth="1.563rem"
            />
            <div className="custom-instructions-parent">
              <b className="custom-instructions">Custom Instructions</b>
              <div className="take-control-of-your-conversat-wrapper">
                <div className="take-control-of">
                  Take control of your conversations with specific guidelines
                  and formatting. Ensure every message reflects your unique
                  style and personality
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-handler-parent">
          <div className="image-handler">
            <b className="personalization">Personalization</b>
            <div className="tailor-your-chats">
              Tailor your chats to perfection. Select your chat partner
              (Manager, friend, crush), adjust response length, add emojis, and
              provide custom instructions.
            </div>
          </div>
          <div className="output-combiner">
            <div className="tone-settings-parent">
              <b className="tone-settings">Tone Settings</b>
              <div className="tone-settings-customize">
                Tone Settings: Customize your tone for every
                conversation—whether it's professional, casual, or even
                sarcastic.
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent7">
          <div className="rectangle-parent7">
            <div className="frame-child11" />
            <b className="b">2</b>
          </div>
          <div className="rectangle-parent8">
            <div className="frame-child12" />
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
            <img
              className="image-2-icon"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <img className="vector-icon" alt="" src="/vector-2.svg" />
          <div className="wrapper-joiner">
            <img className="joiner-icon" alt="" src="/joiner.svg" />
          </div>
          <img className="frame-child13" alt="" src="/vector-3.svg" />
          <div className="rectangle-parent9">
            <div className="frame-child14" />
            <b className="b1">4</b>
          </div>
          <img
            className="comparator-icon"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Paths;
