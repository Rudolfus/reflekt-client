import "../App.css";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";

const GetAllQuestionsOfATopic = ({ questionsArr, isLoading }) => {
  const { topic } = useParams();

  const filteredQuestions = questionsArr.filter((filteredQuestionArr) => {
    return filteredQuestionArr.topic === topic;
  });

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
    <div>
      {questionsArr === null
        ? "loading questions ..."
        : filteredQuestions.map((onlyOneQue) => {
            return (
              <div key={onlyOneQue._id}>
                <div>
                  <h2>Topic: {onlyOneQue.topic}</h2>

                  <p>question: {onlyOneQue.question}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default GetAllQuestionsOfATopic;
