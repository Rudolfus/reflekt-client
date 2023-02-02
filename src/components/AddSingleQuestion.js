import "../App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import tree from "../assets/R-Illu-3-baum.png";

const AddSingleQuestion = () => {
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { question, topic, isPublic };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/questions`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        // Reset the state
        setQuestion("");
        setTopic("");
        setIsPublic();
        navigate("/myreflekt");
      })
      .catch((error) =>
        console.log("Sorry, there was an error creating your question.", error)
      );
  };

  return (
    <div className="createQuestion">
      <h3 className="articles-heading">Create a question</h3>
      <Card style={{ width: "18rem" }} className="createQuestion">
        <Card.Img variant="top" src={tree} />
        <Card.Body>
          <Card.Title>Your Question</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter question"
              />
              <Form.Text className="text-muted">
                Try to create an open question using "what", "how", "when" etc.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter a topic"
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
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddSingleQuestion;
