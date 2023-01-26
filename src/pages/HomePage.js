import InfoBox from "../components/InfoBox";
import { SetOfQuestions } from "../components/SetOfQuestions";
import { QuestionCarousel } from "../components/QuestionCarousel";

const HomePage = () => {
  return (
    <div>
      {/* landing page */}
      <InfoBox />
      <QuestionCarousel />
      <SetOfQuestions />
      {/* info about science page */}
      <button>Try it now</button>
    </div>
  );
};

export default HomePage;
