import { useParams } from "react-router-dom";

const GetSingleQuestion = ({ questionsArr, isLoading }) => {
  const { questionId } = useParams();
  /*
  1. data from API is fetched
  2. data still not there, therefore beersArr undefinde (asynchronous JS)
  3. if beersArr is not yet defined, show the picture (or sth else) and go back to App.js
  4. in app.js the state of the array is update (with the API data)
  5. the conditions here are not true anymore and the code underneath is executed successfully
  */

  if (isLoading) {
    return (
      <div>
        Still waiting for second state update of the array so that it can be
        displayed.
      </div>
    );
  }

  if (questionsArr === undefined && questionsArr.length > 0) {
    return (
      <div>
        <img
          src="https://s3.memeshappen.com/memes/I-DON39T-ALWAYS-WAIT-FOR-A-LONG-TIME-FOR-A-WEBSITE-TO-LOAD-BUT-WHEN-I-DO-IT-LOADS-AT-THE-VERY-SAME-TIME-I-CLOSE-THE-BROWSER-meme-405.jpg"
          alt="meme about waiting"
        />
      </div>
    );
  }

  const oneSingleQuestion = questionsArr.find((questionDetails) => {
    return questionDetails._id === questionId;
  });

  return (
    <div>
      {questionsArr === null ? (
        "loading questions ..."
      ) : (
        <div>
          <h2>Topic: {oneSingleQuestion.topic}</h2>
          <p>{oneSingleQuestion.question}</p>
        </div>
      )}
    </div>
  );
};

export default GetSingleQuestion;
