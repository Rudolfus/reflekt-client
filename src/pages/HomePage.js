import InfoBox from "../components/InfoBox";
import QuestionCarrousel from "../components/QuestionCarrousel";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h1>Change starts in the mind.</h1>
      {/* landing page */}
      <InfoBox />
      <QuestionCarrousel />
      {/* <SetOfQuestions /> */}
      {/* info about science page */}

      {isLoggedIn && (
        <>
          <div class="ta-c padT150 padB150">
            <NavLink to="/myreflekt">
              <div class="ta-c padT150 padB150">
                <button class="button accept-btn" onClick="addAnimation2()">
                  Start reflekting
                </button>
              </div>
            </NavLink>
          </div>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/signup">
            <div class="ta-c padT150 padB150">
              <button class="button accept-btn" onClick="addAnimation2()">
                Try it now
              </button>
            </div>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default HomePage;
