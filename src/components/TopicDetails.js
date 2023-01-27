import React from "react";
import { StyledCard } from "./styled/StyledCard";

const TopicDetails = ({ question }) => {
  return (
    <StyledCard>
      Component: TopicDetails
      <h3>{question.question}</h3>
    </StyledCard>
  );
};

export default TopicDetails;
