import SingleTopic from "./SingleTopic";
import { useState } from "react";
import "../App.css"

const TopicList = ({ questionsArr }) => {
  const [viewTopic, setViewTopic] = useState("");

  const handleTopic = (thema) => {
    setViewTopic(thema);
  };

  // create a new array by extracting the unique topics from the questions
  // array using the map and set functions
  const uniqueTopics = [
    ...new Set(questionsArr.map((question) => question.topic)),
  ];

  return (
    <div className="allanswers">
      {/* use a forEach method to iterate over the topics array
        create a new component called "Topic" to render topic and list of questions
        realted to the topic */}

      {uniqueTopics.map((topic) => {
        return (
          <SingleTopic
            handleTopic={handleTopic}
            topic={topic}
            key={topic}
            questionsArr={questionsArr}
            viewTopic={viewTopic}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
