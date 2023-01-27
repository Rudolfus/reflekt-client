import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; //  <== IMPORT

function EditAnswer() {
  const [answer, setAnswer] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const { answerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}`)
      .then((response) => {
        const oneSingleAnswer = response.data;

        setAnswer(oneSingleAnswer.answer);
      })
      .catch((error) =>
        console.log(
          "Sorry, there was a problem with obtaining your answer.",
          error
        )
      );
  }, [answerId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { answer, isPublic };

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/answers/${answerId}`,
        requestBody
      )
      .then(() => {
        navigate(`/answers/${answerId}`);
      });
  };

  ///////////////// delete a question /////////////////

  const deleteAnswer = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/questions/${answerId}`)
      .then(() => {
        navigate("/myreflekt");
      })
      .catch((err) => console.log(err));
  };
  ///////////////// delete a question /////////////////

  return (
    <div>
      <h3>Edit the Answer</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Answer:</label>
        <textarea
          name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
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

      <button onClick={deleteAnswer}>Delete Answer</button>
    </div>
  );
}

export default EditAnswer;
