import "../App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddSingleQuestion = () => {
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      question: question,
      topic: topic,
      isPublic: isPublic,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/questions`, body)
      .then(() => {
        setQuestion("");
        setTopic("");
        setIsPublic();
        navigate("/myreflect");
      })
      .catch((error) =>
        console.log("Sorry, there was an error creating your question.", error)
      );
  };

  return (
    <div>
      <h3>Create a question</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Your question:</label>
        <input
          type="text"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        <label>Topic:</label>
        <textarea
          type="text"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
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

export default AddSingleQuestion;
