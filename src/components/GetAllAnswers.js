import "../App.css";

const GetAllAnswers = ({ answersArr, isLoading }) => {
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
      {answersArr === null
        ? "loading answers ..."
        : answersArr.map((onlyOneAnswer) => {
            return (
              <div key={onlyOneAnswer._id}>
                <div>
                  <h4>answer: {onlyOneAnswer.answer}</h4>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default GetAllAnswers;
