import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import pen from "../assets/pen.png";

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
      <Card style={{ width: "18rem" }} className="createQuestion">
        <Card.Img variant="top" src={pen} />
        <Card.Body>
          <Card.Title>Edit your Answer</Card.Title>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="privacy"
                value={isPublic}
                onClick={(e) => setIsPublic(!isPublic)}
                label="This is private"
              />
            </Form.Group>
            <Button variant="warning" type="submit">
            Update Question
            </Button>
          </Form>
          <Button onClick={deleteAnswer} variant="danger" type="submit">
        Delete Question
      </Button>
      <Button onClick={goBack} variant="warning">
        back
      </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EditAnswer;
