import FrameComponent4 from "./FrameComponent4";
import "../styles/components-css/FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="frame-section">
      <div className="frame-child16" />
      <div className="frame-wrapper4">
        <div className="frame-parent8">
          <div className="frame-wrapper5">
            <div className="frame-parent9">
              <div className="testimonials-wrapper">
                <h1 className="testimonials">Testimonials</h1>
              </div>
              <div className="arrow-right-3-parent">
                <img
                  className="arrow-right-3"
                  alt=""
                  src="/arrow--right-3@2x.png"
                />
                <div className="arrow-right-4">
                  <img
                    className="iconlylightarrow-right-2"
                    alt=""
                    src="/iconlylightarrowright2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="what-clients-say">What clients say about us</h3>
        </div>
      </div>
      <div className="aligner-parent">
        <div className="aligner">
          <div className="distribute-driver">
            <div className="distribute-driver-child" />
            <div className="proportion-preserver">
              <img
                className="opacity-controller-icon"
                alt=""
                src="/vector-2-1.svg"
              />
              <img
                className="fill-filler-icon"
                alt=""
                src="/fill-filler@2x.png"
              />
              <img
                className="blendable-blender-icon"
                alt=""
                src="/blendable-blender@2x.png"
              />
              <img
                className="stroke-styler-icon"
                alt=""
                src="/stroke-styler@2x.png"
              />
              <img
                className="blendable-blender-icon1"
                alt=""
                src="/blendable-blender@2x.png"
              />
              <img
                className="blendable-blender-icon2"
                alt=""
                src="/blendable-blender@2x.png"
              />
              <div className="effect-engine">
                <img
                  className="transformer-icon"
                  alt=""
                  src="/vector-1-1.svg"
                />
                <img
                  className="arranger-icon"
                  loading="lazy"
                  alt=""
                  src="/ellipse-64@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <FrameComponent4 />
        <FrameComponent4 />
      </div>
    </section>
  );
};

export default FrameComponent3;
