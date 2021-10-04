import React from "react";
import { StyledStudentsResults } from "../../styles/students-results/StudentsResults.styled";
import ResultBox from "./ResultBox";
import results from "./ResutsContent";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "../../CarouselConfig";

const StudentResults = () => {
  return (
    <StyledStudentsResults>
      <h1>O’quvchilarimiz natijalari</h1>

      <div>
        <Carousel
          showArrows={false}
          itemPadding={[10, 10]}
          enableSwipe={true}
          enableMouseSwipe={true}
          breakPoints={breakpoints}
        >
          {results.map((result, index) => (
            <ResultBox key={index} result={result} />
          ))}
        </Carousel>
      </div>
    </StyledStudentsResults>
  );
};

export default StudentResults;
