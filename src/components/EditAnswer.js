import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function EditAnswer() {
  const [answer, setAnswer] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const { answerId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
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
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        navigate("/myreflekt");
      });
  };

  ///////////////// delete an answer /////////////////

  const deleteAnswer = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/myreflekt");
      })
      .catch((err) => console.log(err));
  };
  ///////////////// delete an answer /////////////////

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
          checked={isPublic}
          onClick={(e) => setIsPublic(!isPublic)}
        />

        <Button variant="warning" type="submit">
          Update Question
        </Button>
      </form>

      <Button onClick={deleteAnswer} variant="danger" type="submit">
        Delete Question
      </Button>
      <Button onClick={goBack} variant="warning">
        back
      </Button>
    </div>
  );
}

export default EditAnswer;
