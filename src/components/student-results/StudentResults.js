import React from "react";
import { StyledStudentsResults } from "../../styles/students-results/StudentsResults.styled";
import ResultBox from "./ResultBox";
import results from "./ResutsContent";

const StudentResults = () => {
  return (
    <StyledStudentsResults>
      <h1>O’quvchilarimiz natijalari</h1>

      <div>
        {results.map((result,index) => (
          <ResultBox key={index} result={result} />
        ))}
      </div>
    </StyledStudentsResults>
  );
};

export default StudentResults;
