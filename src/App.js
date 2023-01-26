import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import About from "./pages/About";
import SelectMode from "./pages/SelectMode";
import Profile from "./pages/Profile";
import SignUpLogIn from "./pages/SignUpLogIn";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<SelectMode />} />
        <Route path="/myreflect" element={<Profile />} />
        <Route path="/signup" element={<SignUpLogIn />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
