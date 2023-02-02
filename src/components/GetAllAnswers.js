import "../App.css";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GetAllAnswers = ({ answersArr, isLoading, questionsArr }) => {
  const navigate = useNavigate();
  const { Id } = useParams();

  const goBack = () => {
    navigate(-1);
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

  // compare both and return the matching elements
  const answersOfOneQue = answersArr.filter((answer) => answer.question === Id);
  // expected output: 3 matching answers to one question
  console.log(answersOfOneQue);

  return (
    <div>
      {answersArr === null
        ? "loading answers ..."
        : answersOfOneQue.map((answersOfOneQue) => {
            if (answersOfOneQue.length === 0) {
              return (
                <div>
                  So far, you haven't answered this question.
                  <Link to={`/addanswer/${Id}`}>Add an answer</Link>
                </div>
              );
            } else {
              return (
                <div key={answersOfOneQue._id}>
                  <div>
                    <h4>answer: {answersOfOneQue.answer}</h4>
                  </div>
                </div>
              );
            }
          })}
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default GetAllAnswers;
