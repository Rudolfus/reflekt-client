import "../App.css";
import Spinner from 'react-bootstrap/Spinner';

const GetAllQuestions = ({ questionsArr, isLoading }) => {
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
        : questionsArr.map((onlyOneQue) => {
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

export default GetAllQuestions;
