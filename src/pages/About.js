import placeholder from "../assets/placeholder_icon.png";
import tree from "../assets/R-Illu-3-baum.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <img src={tree} className="full-width-img" alt="wave-placeholder" />
      <div>
        <h1>About Reflekt</h1>
        <div>
          <img src={placeholder} alt="icon" />
        </div>
        <h2>Who we are</h2>
        <p>
          Think of Reflekt as your mind’s best friend. We’re here for you
          whenever you need us, wherever you are, helping you get through tough
          times and find joy in every day.
        </p>
      </div>

      <div>
        <div>
          <img src={placeholder} alt="icon" />
        </div>
        <h2>What we do</h2>
        <p>
          Through science-backed journaling and mindfulness tools, Reflekt helps
          you create life-changing habits to support your mental health and find
          a healthier, happier you.
        </p>
      </div>

      <div>
        <div>
          <img src={placeholder} alt="icon" />
        </div>
        <h2>Why we do it</h2>
        <p>
          Reflekt is proven to reduce stress by 14% in just 11 days. It can also
          help you with stress management and emotional regulation by providing
          an outlet for expressing thoughts and feelings.
        </p>
      </div>
      {isLoggedIn && (
        <>
          <NavLink to="/myreflekt">
            <button>Start reflekting</button>
          </NavLink>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/signup">
            <button>Try it now</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default About;
