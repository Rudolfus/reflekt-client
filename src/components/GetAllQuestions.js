import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const GetAllQuestions = () => {
  const [questionsArr, setQuestionsArr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listQuestions();
  }, []);

  const listQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`)
      .then((response) => {
        setQuestionsArr(response.data); // I want to access and display the API's response
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
        ? "loading beers ..."
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
