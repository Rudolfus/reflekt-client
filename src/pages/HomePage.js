import InfoBox from "../components/InfoBox";
import QuestionCarrousel from "../components/QuestionCarrousel";
import wave from "../assets/wave-homepage.jpeg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <img src={wave} className="full-width-img" alt="wave-placeholder" />
      {/* landing page */}
      <InfoBox />
      <QuestionCarrousel />
      {/* <SetOfQuestions /> */}
      {/* info about science page */}
      <NavLink to="/signup">
        <button>Try it now</button>
      </NavLink>
    </div>
  );
};

export default HomePage;
