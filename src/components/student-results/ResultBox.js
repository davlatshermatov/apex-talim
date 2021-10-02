import React from "react";
import { StyledResultBox } from "../../styles/students-results/StudentsResults.styled";

const ResultBox = ({ result }) => {
  return (
    <StyledResultBox>
      <img src={"./images/" + result.img + ".png"} alt={result.name} />

      <div>
        <h3>{result.name}</h3>
        <p>{result.university}</p>
        <p>{result.period}</p>
      </div>
    </StyledResultBox>
  );
};

export default ResultBox;
