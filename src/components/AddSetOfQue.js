import { useState } from "react";
import axios from "axios";

const AddQuestion = ({ getAllQuestions }) => {
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const [privacy, setPrivacy] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { question, topic, privacy };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/questions`, requestBody)
      .then(() => {
        setQuestion("");
        setTopic("");
        setPrivacy();

        /* we are refreshing the list of questions and dynamically
        fetching data each time we create a new set of question using the form */
        getAllQuestions();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Create a question</h3>
      <br />
      <form onSubmit={handleSubmit}>
        {" "}
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
          value={privacy}
          onClick={(e) => setPrivacy(!privacy)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
