import { useEffect, useState } from "react";
import axios from "axios";
import QuestionCard from "./TopicDetails";
import AddAnswer from "../pages/AddAnswer";
import { useParams } from "react-router-dom";
//{ topic }
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

  const handleClick = () => {
    return <AddAnswer topicChosen={topic} />;
  };

  const filteredQuestions = allQuestions.filter((question) => {
    return question.topic === topic;
  });

  if (loading) {
    return <div>is loading ...</div>;
  }

  return (
    <div>
      <h2>{topic}</h2>
      {filteredQuestions.map((question) => {
        return (
          <div>
            <QuestionCard key={question._id} question={question} />
          </div>
        );
      })}
      <button onClick={handleClick}>choose this topic</button>
    </div>
  );
};

export default QuestionList;
