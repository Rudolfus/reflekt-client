import { useEffect, useState } from "react";
import axios from "axios";

const QuestionList = ({ topic }) => {
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
    <div>
      <h3>QuestionList-{topic}</h3>
      {filteredQuestions.map((question) => {
        return (
          <div key={question._id}>
            <h4>{question.question}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionList;
