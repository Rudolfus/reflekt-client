import React from "react";
import { StyledCard } from "./styled/StyledCard";

const QuestionCard = ({ question }) => {
  return (
    <StyledCard>
      <h3>{question.question}</h3>
    </StyledCard>
  );
};

export default QuestionCard;
