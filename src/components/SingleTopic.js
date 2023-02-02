const SingleTopic = ({ topic, questionsArr, handleTopic, viewTopic }) => {
  const questions = questionsArr.filter((question) => {
    return question.topic === topic;
  });

  const chooseThreeQuestions = (someArr) => {
    const filteredArrayofQuestions = [];

    // if there are less than 3 questions, render 1 or two que, if there are more, pick only 3
    let counter = someArr.length < 3 ? someArr.length : 3;

    // less than 3 to generate three questions
    for (let i = 0; i < counter; i++) {
      let randomNumber = Math.floor(Math.random() * someArr.length) - 1;

      // check if the randomNumber that is less than 0
      if (randomNumber < 0) {
        randomNumber = 0;
      }

      // check if the randomNumber is bigger / equal to prevent undefined
      if (randomNumber >= someArr.length) {
        randomNumber = someArr.length - 1;
      }

      const newQuestion = someArr[randomNumber];
      if (!filteredArrayofQuestions.includes(newQuestion)) {
        filteredArrayofQuestions.push(someArr[randomNumber]);
      }
    }
    return filteredArrayofQuestions;
  };

  return (
    <div
      onClick={() => {
        handleTopic(topic);
      }}
    >
      <p>{topic}</p>

      {topic === viewTopic &&
        chooseThreeQuestions(questions).map((question) => {
          return <p key={question.id}>{question.question}</p>;
        })}
    </div>
  );
};

export default SingleTopic;
