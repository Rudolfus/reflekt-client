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

function App() {
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
        <Route path="/allquestion" element={<GetAllQuestions />} />
        <Route path="/singlequestion" element={<GetSingleQuestion />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
