import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; //  <== IMPORT

function EditQuestion() {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const { questionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions/${questionId}`)
      .then((response) => {
        const oneSingleQuestion = response.data;

        setTopic(oneSingleQuestion.topic);
        setQuestion(oneSingleQuestion.question);
      })
      .catch((error) =>
        console.log(
          "Sorry, there was a problem with obtaining your question.",
          error
        )
      );
  }, [questionId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { topic, question, isPublic };

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/questions/${questionId}`,
        requestBody
      )
      .then((response) => {
        // Once the request is resolved successfully and the question
        // is updated we navigate back to the details page
        navigate(`/questions/${questionId}`);
      });
  };

  ///////////////// delete a question /////////////////

  const deleteQuestion = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/questions/${questionId}`)
      .then(() => {
        navigate("/myreflekt");
      })
      .catch((err) => console.log(err));
  };
  ///////////////// delete a question /////////////////

  return (
    <div>
      <h3>Edit the Question</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Topic:</label>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label>Question:</label>
        <textarea
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label>Make it private:</label>
        <input
          type="checkbox"
          name="privacy"
          value={isPublic}
          onClick={(e) => setIsPublic(!isPublic)}
        />

        <button type="submit">Update Question</button>
      </form>

      <button onClick={deleteQuestion}>Delete Question</button>
    </div>
  );
}

export default EditQuestion;
