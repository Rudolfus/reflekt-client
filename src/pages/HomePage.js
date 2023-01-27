import InfoBox from "../components/InfoBox";
import SetOfQuestions from "../components/SetOfQuestions";
import QuestionCarrousel from "../components/QuestionCarorusel";

const HomePage = () => {
  return (
    <div>
      {/* landing page */}
      <InfoBox />
      <QuestionCarrousel />
      <SetOfQuestions />
      {/* info about science page */}
      <button>Try it now</button>
    </div>
  );
};

export default HomePage;