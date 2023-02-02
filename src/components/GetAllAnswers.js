import "../App.css";
import Spinner from "react-bootstrap/Spinner";

const GetAllAnswers = ({ answersArr, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  console.log(answersArr);
  // const answersOfOneQue = answersArr.filter(
  //   (answer) => answer.question === question._id
  // );
  // console.log(answersOfOneQue);

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
