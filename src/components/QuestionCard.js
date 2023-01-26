import React from "react";
import { StyledCard } from "./styled/StyledCard";

const QuestionCard = ({ question }) => {
  return (
    <StyledCard>
      question
      <h4>{question.question}</h4>
    </StyledCard>
  );
};

export default QuestionCard;
