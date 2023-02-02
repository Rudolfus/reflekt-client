import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import About from "./pages/About";
import SelectMode from "./pages/SelectMode";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import QuestionList from "./components/QuestionList";
///////////////////////////////////////////
import AddSingleQuestion from "./components/AddSingleQuestion";
import GetAllQuestions from "./components/GetAllQuestionsOfATopic";
import GetSingleQuestion from "./components/GetSingleQuestion";
import EditQuestion from "./components/EditQuestion";
///////////////////////////////////////////
import AddAnswer from "./pages/AddAnswer";
import GetAllAnswers from "./components/GetAllAnswers";
import GetSingleAnswer from "./components/GetSingleAnswer";
import EditAnswer from "./components/EditAnswer";
///////////////////////////////////////////
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../src/assets/background.jpg";

function App() {
  const [questionsArr, setQuestionsArr] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    listQuestions();
  }, []);

  const listQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setQuestionsArr(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [answersArr, setAnswersArr] = useState();

  useEffect(() => {
    listAnswers();
  }, []);

  const listAnswers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/answers`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setAnswersArr(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage Footer={<Footer />} />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<SelectMode />} />
        <Route
          path="/myreflekt"
          element={
            <Profile
              GetAllQuestions={GetAllQuestions}
              GetSingleAnswer={GetSingleAnswer}
            />
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/question/:topic" element={<QuestionList />} />

        <Route path="/addquestion" element={<AddSingleQuestion />} />
        <Route
          path="/questions"
          element={
            <GetAllQuestions
              questionsArr={questionsArr}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/questions/:questionId"
          element={
            <GetSingleQuestion
              questionsArr={questionsArr}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/editquestion/:questionId"
          element={
            <EditQuestion
              questionsArr={questionsArr}
              isLoading={isLoading}
              listQuestions={listQuestions}
            />
          }
        />
        <Route
          path="/addanswer/:questionId"
          element={
            <AddAnswer questionsArr={questionsArr} isLoading={isLoading} />
          }
        />
        <Route
          path="/answers"
          element={
            <GetAllAnswers answersArr={answersArr} isLoading={isLoading} />
          }
        />
        <Route
          path="/answers/:answerId"
          element={
            <GetSingleAnswer answersArr={answersArr} isLoading={isLoading} />
          }
        />
        <Route
          path="/editanswer/:answerId"
          element={<EditAnswer answersArr={answersArr} isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
