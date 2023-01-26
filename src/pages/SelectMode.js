import { useEffect, useState } from "react";
import AddQuestion from "../components/AddQuestion";
import axios from "axios";
import QuestionList from "../components/QuestionList";

const SelectMode = () => {
  const [existingTopic, setExistingTopic] = useState("");
  const [newTopic, setNewTopic] = useState(false);

  const chooseTopic = (topic) => {
    setExistingTopic(topic);
    setNewTopic(false);
  };

  const chooseNewTopic = () => {
    setExistingTopic("");
    setNewTopic(true);
  };

  // const [allQuestions, setAllQuestions] = useState([]);

  // const getAllQuestions = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/api/questions`)
  //     .then((allQuestions) => setAllQuestions(allQuestions.data))
  //     .catch((error) => console.log("error getting all the projects", error));
  // };

  // useEffect(() => {
  //   getAllQuestions();
  // }, []);

  return (
    <div>
      <p>{JSON.stringify(existingTopic)}</p>
      <p>{JSON.stringify(newTopic)}</p>
      <section>
        <button
          onClick={() => {
            chooseTopic("self-care");
          }}
        >
          self-care
        </button>

        <button
          onClick={() => {
            chooseTopic("smoking");
          }}
        >
          smoking
        </button>

        <button
          onClick={() => {
            chooseTopic("job");
          }}
        >
          job
        </button>

        <button
          onClick={() => {
            chooseTopic("motivation");
          }}
        >
          motivation
        </button>

        <button
          onClick={() => {
            chooseTopic("eating");
          }}
        >
          eating
        </button>

        <button
          onClick={() => {
            chooseTopic("relationship");
          }}
        >
          relationship
        </button>
      </section>

      <button onClick={chooseNewTopic}>create new questions</button>
      {/* if the left thing is true, render the right thing */}
      {newTopic && <AddQuestion />}
      {/* if left thing is true, render the middle thing, if false, the right
        {newTopic ? <AddQuestion /> : null} */}
      {existingTopic && <QuestionList topic={existingTopic} />}
    </div>
  );
};

export default SelectMode;
