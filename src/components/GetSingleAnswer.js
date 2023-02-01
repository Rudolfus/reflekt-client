import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const GetSingleAnswer = ({ answersArr, isLoading }) => {
  const { answerId } = useParams();

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">
            Still waiting for second state update of the array so that it can be
            displayed.
          </span>
        </Spinner>
      </div>
    );
  }

  if (answersArr === undefined && answersArr.length > 0) {
    return (
      <div>
        <img
          src="https://s3.memeshappen.com/memes/I-DON39T-ALWAYS-WAIT-FOR-A-LONG-TIME-FOR-A-WEBSITE-TO-LOAD-BUT-WHEN-I-DO-IT-LOADS-AT-THE-VERY-SAME-TIME-I-CLOSE-THE-BROWSER-meme-405.jpg"
          alt="meme about waiting"
        />
      </div>
    );
  }

  const oneSingleAnswer = answersArr.find((answerDetails) => {
    return answerDetails._id === answerId;
  });

  return (
    <div>
      {answersArr === null ? (
        "loading answers ..."
      ) : (
        <div>
          <h2>answer: {oneSingleAnswer.answer}</h2>
        </div>
      )}
    </div>
  );
};

export default GetSingleAnswer;
