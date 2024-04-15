import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent from "../components/GroupComponent";
import Transformers from "../components/Transformers";
import ConditionSplitter from "../components/ConditionSplitter";
import Paths from "../components/Paths";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent3 from "../components/FrameComponent3";
import OutputCollector from "../components/OutputCollector";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent.js";
import FrameComponent1 from "../components/FrameComponent1";
import "../styles/Home.css";

// import HappyFace from "../images/icons8-grinning-face-19.png";
// import Email from "../images/icons8-email-22.png";
// import Gift from "../images/icons8-gift-25.png";
// import MagicWand from "../images/icons8-magic-wand-23.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-child" />
      <h3 className="craft-your-story">
        "Craft Your Story, Shape Your Destiny with our Writer Assistant”
      </h3>
      <h3 className="ready-to-start-container">
        <span>{`Ready to start, `}</span>
        <span className="its-free">It’s Free</span>
      </h3>
      <FrameComponent6 />
      <GroupComponent />
      <Transformers />
      <ConditionSplitter />
      <Paths />
      <FrameComponent5 />
      <section className="rectangle-parent">
        <div className="frame-child" />
        <img className="mask-group-icon" alt="" src="/mask-group.svg" />
      </section>
      <FrameComponent3 />
      <section className="condition-splitter">
        <div className="output-collector-parent">
          <OutputCollector />
          <FrameComponent2 />
          <FrameComponent />
        </div>
      </section>
      <div className="combiner">
        <h1 className="craft-your-story1">
          Craft Your Story, Shape Your Destiny with our Writer Assistant
          “Lekhak”
        </h1>
        <FrameComponent1
          propPadding="0rem 1.313rem 0rem 1.25rem"
          propBackgroundColor="#fff"
          propColor="#000"
        />
      </div>
      <section className="renamer">
        <img className="chrome-icon" alt="" src="/chrome-3@2x.png" />
      </section>
      
    </div>
  );
};

export default Home;
