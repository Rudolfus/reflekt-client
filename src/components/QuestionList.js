import { useEffect, useState } from "react";
import axios from "axios";
// import QuestionCard from "./TopicDetails";
import { useParams, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pen from "../assets/R-Illu-2stift.png";

const QuestionList = () => {
  const { topic } = useParams();
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`)
      .then((allQuestions) => setAllQuestions(allQuestions.data))
      .catch((error) => console.log("error getting all the projects", error));
  };

  useEffect(() => {
    getAllQuestions();
    setLoading(false);
  }, []);

  const filteredQuestions = allQuestions.filter((question) => {
    return question.topic === topic;
  });

  if (loading) {
    return <div>is loading ...</div>;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pen} />
      <Card.Body>
        <Card.Title>{topic}</Card.Title>

        {filteredQuestions.map((question) => {
          return (
            <Card.Text key={question._id} question={question}>
              {question.question}
            </Card.Text>
          );
        })}
        <Button variant="primary">
          <NavLink to="/addanswer">reflekt</NavLink>
        </Button>
      </Card.Body>
    </Card>
  );

  //   return (
  //     <div>
  //       <h2>{topic}</h2>
  //       {filteredQuestions.map((question) => {
  //         return (
  //           <div>
  //             <QuestionCard key={question._id} question={question} />
  //           </div>
  //         );
  //       })}
  //       <NavLink to="/addanswer">
  //         {/* <button className="button accept-btn" onClick="addAnimation2()"> */}
  //         reflekt
  //         {/* </button> */}
  //       </NavLink>
  //     </div>
  //   );
};

export default QuestionList;
