import ".././App.css";
import { useState } from "react";
import AddSingleQuestion from "../components/AddSingleQuestion";
import QuestionList from "../components/QuestionList";

const SelectMode = () => {
  // existingTopic = set of questions that are already made and displayed on click (e.g. "smoking")
  // existingTopic is initially  false, thus not displayed
  const [existingTopic, setExistingTopic] = useState("");
  // newTopic = option to select single/set of new questions
  // newTopic is also initially false, thus the option of creating a new question is not displayed
  const [newTopic, setNewTopic] = useState(false);

  // this function represents the selection of a new topic, thus
  // the value changes to truthy, thus displayed
  // at the same time, it negates the other option
  const chooseTopic = (topic) => {
    setExistingTopic(topic);
    setNewTopic(false);
  };

  // like above, vice versa
  const chooseNewTopic = () => {
    setExistingTopic("");
    setNewTopic(true);
  };

  return (
    <div>
      <section>
        <button
          className="rounded-button"
          onClick={() => {
            // here the function below is called and the string is the argument
            // passed as topic and then as the state respectively
            chooseTopic("self-care");
          }}
        >
          self-care
        </button>

        <button
          className="rounded-button"
          onClick={() => {
            chooseTopic("smoking");
          }}
        >
          smoking
        </button>

        <button
          className="rounded-button"
          onClick={() => {
            chooseTopic("job");
          }}
        >
          job
        </button>

        <button
          className="rounded-button"
          onClick={() => {
            chooseTopic("motivation");
          }}
        >
          motivation
        </button>

        <button
          className="rounded-button"
          onClick={() => {
            chooseTopic("eating");
          }}
        >
          eating
        </button>

        <button
          className="rounded-button"
          onClick={() => {
            chooseTopic("relationship");
          }}
        >
          relationship
        </button>
      </section>
      <br />
      <button onClick={chooseNewTopic} className="rounded-button">
        create new questions
      </button>
      {/* if the left thing is true, render the right thing */}
      {newTopic && <AddSingleQuestion />}
      {/* if left thing is true, render the middle thing, if false, the right
        {newTopic ? <AddQuestion /> : null} */}
      {existingTopic && <QuestionList topic={existingTopic} />}
    </div>
  );
};

export default SelectMode;
