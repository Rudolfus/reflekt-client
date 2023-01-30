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

export default HomePage;
