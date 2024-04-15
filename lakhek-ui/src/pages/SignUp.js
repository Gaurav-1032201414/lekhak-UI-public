import SignUpComponent from "../components/SignUpComponent";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="lekhak-writerSignUp">
      <section className="frame-parentSignUp">
        <SignUpComponent />
        {/* <img
          className="chrome-iconSignUp"
          loading="lazy"
          alt=""
          src="/chrome.svg"
        /> */}
        {/* <div className="wrapper-group-2985SignUp">
          <img
            className="wrapper-group-2985-childSignUp"
            alt=""
            src="/group-2985.svg"
          />
        </div> */}
      </section>
      <div className="frame-groupSignUp">
        <div className="frame-wrapperSignUp">
          <div className="home-parentSignUp">
            
            <div className="frame-divSignUp">
              <div className="writer-parentSignUp">
                <div className="vector-wrapperSignUp">
                  <img
                    className="frame-itemSignUp"
                    loading="lazy"
                    alt=""
                    src="/line-10.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="frame-formSignUp">
          <div className="frame-parent1SignUp">
            <div className="already-have-an-account-log-i-wrapperSignUp">
              <div className="already-have-an-containerSignUp">
                <span className="already-have-anSignUp">{`Already have an account? `}</span>
                <span className="log-in1SignUp">Log In</span>
              </div>
            </div>
            <div className="frame-parent2SignUp">
              <div className="frame-wrapper1SignUp">
                <div className="rectangle-groupSignUp">
                  <div className="frame-innerSignUp" />
                  <input
                    className="usernameSignUp"
                    placeholder="Username"
                    type="text"
                  />
                </div>
              </div>
              <div className="frame-wrapper2SignUp">
                <div className="rectangle-containerSignUp">
                  <div className="rectangle-divSignUp" />
                  <input
                    className="passwordSignUp"
                    placeholder="Password"
                    type="text"
                  />
                </div>
              </div>
              <button className="component-3SignUp">
                <div className="add-to-chromeSignUp">Sign Up</div>
              </button>
            </div>
          </div>
          <div className="frame-wrapper3SignUp">
            <div className="frame-parent3SignUp">
              <div className="frame-parent4SignUp">
                <div className="line-wrapperSignUp">
                  <div className="line-divSignUp" />
                </div>
                <div className="orSignUp">Or</div>
                <div className="line-containerSignUp">
                  <div className="frame-child1SignUp" />
                </div>
              </div>
              <button className="component-31SignUp">
                <div className="add-to-chrome1SignUp">Sign Up with Google</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
