import { useState } from "react";
import AddQuestion from "../components/AddQuestion";
import QuestionList from "../components/QuestionList";

const SelectMode = () => {
  // existingTopic = set of questions that are already made and displayed at the beginning
  // existingTopic is initially  false, thus not displayed
  const [existingTopic, setExistingTopic] = useState("");
  // newTopic = question or set of question to be created
  // newTopic is also initially false, thus not displayed
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
          onClick={() => {
            // here the function above is called and the string is the argument
            // passed as topic and then the state respectively
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
      <br />
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
