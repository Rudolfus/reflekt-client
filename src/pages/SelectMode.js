import ".././App.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import TopicList from "../components/TopicList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const SelectMode = ({ topic }) => {
  const [questionsArr, setQuestionsArr] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    listQuestions();
  }, []);

  const listQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setQuestionsArr(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="selectMode">
      <div>
        <Button variant="warning">
          <NavLink to="/addquestion">create new questions</NavLink>
        </Button>{" "}
      </div>
      <div className="TopicList">
        <TopicList questionsArr={questionsArr} />
      </div>
    </div>
  );
};

export default SelectMode;
