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
import TopicCard from "./components/TopicCard";
import QuestionList from "./components/QuestionList";
import AddSingleQuestion from "./components/AddSingleQuestion";
import GetAllQuestions from "./components/GetAllQuestions";
import GetSingleQuestion from "./components/GetSingleQuestion";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [questionsArr, setQuestionsArr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listQuestions();
  }, []);

  const listQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`)
      .then((response) => {
        setQuestionsArr(response.data); // I want to access and display the API's response
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <TopicCard />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/start" element={<SelectMode />} /> */}
        <Route path="/myreflect" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question/:topic" element={<QuestionList />} />

        {/* <Route path="/chooseSingleMulti" element={< />} />
        <Route path="/addSetOfQue" element={< />} />
        <Route path="/addSingleQue" element={< />} /> */}
        {/* CRUD QUESTION */}

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
