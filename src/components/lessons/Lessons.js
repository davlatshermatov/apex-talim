import React from "react";
import { StyledLessons } from "../../styles/lessons/Lessons.styled";

const Lessons = () => {
  return (
    <StyledLessons id="photo">
      <h1>Darslardan Fotolavhalar</h1>

      <div>
        <div>
          {" "}
          <img src="./images/lesson-photo-1.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img src="./images/lesson-photo-2.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img src="./images/lesson-photo-3.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img src="./images/lesson-photo-4.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img src="./images/lesson-photo-5.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="./images/lesson-photo-6.png" alt="" />
        </div>
      </div>
    </StyledLessons>
  );
};

export default Lessons;
