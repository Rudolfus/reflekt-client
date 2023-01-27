import InfoBox from "../components/InfoBox";
import QuestionCarrousel from "../components/QuestionCarrousel";
import wave from "../assets/wave-homepage.jpeg";

const HomePage = () => {
  return (
    <div>
      <img src={wave} className="full-width-img" alt="wave-placeholder" />
      {/* landing page */}
      <InfoBox />
      <QuestionCarrousel />
      {/* <SetOfQuestions /> */}
      {/* info about science page */}
      <button>Try it now</button>
    </div>
  );
};

export default HomePage;
