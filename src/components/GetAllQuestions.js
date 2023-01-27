import "../App.css";

const GetAllQuestions = ({ questionsArr, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        Still waiting for second state update of the array so that it can be
        displayed.
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
