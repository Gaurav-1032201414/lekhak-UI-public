import "../styles/components-css/Transformers.css";

const Transformers = () => {
  return (
    <section className="transformers">
      <div className="processors">
        <div className="connectors">
          <div className="containers">
            <h1 className="web-app">Web App</h1>
          </div>
          <h3 className="try-our-web">Try Our Web App</h3>
        </div>
      </div>
      <div className="anchors">
        <div className="group-div">
          <div className="rectangle-wrapper">
            <div className="frame-child4" />
          </div>
          <img
            className="image-5-icon"
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <div className="rectangle-parent1">
          <div className="frame-child5" />
          <img
            className="image-4-icon"
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Transformers;
