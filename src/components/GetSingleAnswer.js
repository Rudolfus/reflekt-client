import { useParams } from "react-router-dom";

const GetSingleAnswer = ({ answersArr, isLoading }) => {
  const { answerId } = useParams();

  if (isLoading) {
    return (
      <div>
        Still waiting for second state update of the array so that it can be
        displayed.
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

  const oneSingleAnswer = answersArr.find((questionDetails) => {
    return questionDetails._id === answerId;
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
