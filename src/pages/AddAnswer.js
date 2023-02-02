import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

const AddAnswer = () => {
  const [answer, setAnswer] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { questionId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the body of the POST request
    const body = { answer, isPublic, questionId, user };

    const storedToken = localStorage.getItem("authToken");
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/answers`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setAnswer("");
        setIsPublic();
        navigate("/myreflekt");
      })
      .catch((error) =>
        console.log("Sorry, there was an error creating your answer.", error)
      );
  };

  return (
    <div>
      <h3>Respond to the question</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Your answer:</label>
        <input
          type="text"
          name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <br />
        <label>Make it private:</label>
        <input
          type="checkbox"
          name="privacy"
          value={isPublic}
          onClick={(e) => setIsPublic(!isPublic)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAnswer;
