import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import pen from "../assets/pen.png";

const AddAnswer = () => {
  const [answer, setAnswer] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { questionId } = useParams();

  const goBack = () => {
    navigate(-1);
  };

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
    <div className="createQuestion">
      <h3 className="articles-heading">Respond to the question</h3>
      <Card style={{ width: "18rem" }} className="createQuestion">
        <Card.Img variant="top" src={pen} />
        <Card.Body>
          <Card.Title>Your Answer</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Answer</Form.Label>
              <Form.Control
                type="text"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer"
              />
              <Form.Text className="text-muted">
                Don't worry if you can't think of something. It is all about the question.
              </Form.Text>
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
              Create
            </Button>
            <Button onClick={goBack} variant="warning">
        back
      </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddAnswer;
