import SingleTopic from "./SingleTopic";
import { useState } from "react";

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

  /////////////////////////////////
  const questions = questionsArr.filter((question) => {
    // return question.topic === topic;
    return true;
  });

  const chooseThreeQuestions = (someArr) => {
    const filteredArrayofQuestions = [];

    let randomNumber = Math.floor(Math.random() * someArr.length) - 1;

    for (let i = 0; i < 3; i++) {
      filteredArrayofQuestions.push(someArr[randomNumber]);
    }

    return filteredArrayofQuestions;
  };

  /////////////////////////////////

  return (
    <div>
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
