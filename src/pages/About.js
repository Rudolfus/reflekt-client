import placeholder from "../assets/placeholder_icon.png";
import tree from "../assets/R-Illu-3-baum.png";
import pen from "../assets/pen.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { MDBBtn } from "mdb-react-ui-kit";

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <img src={tree} className="full-width-img" alt="wave-placeholder" />
      <div className="articles-text-block">
      <h1 className="articles-heading-top">About Reflekt</h1>
        <div>
          <img src={pen}
           width="100%"
          height="100%"
          alt="icon" />
        </div>
        <h2>Who we are</h2>
        <p>
          Think of Reflekt as your mind’s best friend. We’re here for you
          whenever you need us, wherever you are, helping you get through tough
          times and find joy in every day.
        </p>
      </div>

      <div className="articles-text-block">
        <div>
        <img src={pen}
           width="100%"
          height="100%"
          alt="icon" />
        </div>
        <h1 className="articles-heading-top">What we do</h1>
        <p>
          Through science-backed journaling and mindfulness tools, Reflekt helps
          you create life-changing habits to support your mental health and find
          a healthier, happier you.
        </p>
      </div>

      <div className="articles-text-block">
        <div>
        <img src={pen}
           width="100%"
          height="100%"
          alt="icon" />
        </div>
        <h1 className="articles-heading-top">Why we do it</h1>
        <p>
          Reflekt is proven to reduce stress by 14% in just 11 days. It can also
          help you with stress management and emotional regulation by providing
          an outlet for expressing thoughts and feelings.
        </p>
      </div>
      {isLoggedIn && (
        <>
          <MDBBtn color="warning" size="lg" className="me-2 start-try" active>
            <NavLink to="/start">Start reflekting</NavLink>
          </MDBBtn>
        </>
      )}

      {!isLoggedIn && (
        <>
          <MDBBtn color="warning" size="lg" className="me-2 start-try" active>
            <NavLink to="/signup">Try it now</NavLink>
          </MDBBtn>
        </>
      )}
    </div>
  );
};

export default About;
