import React from "react";
import { StyledLessons } from "../../styles/lessons/Lessons.styled";

const Lessons = () => {
  return (
    <StyledLessons>
      <h1>Darslardan Fotolavhalar</h1>

      <div>
        <div> <img src="./images/lesson-photo-1.png" alt="" /></div>
        <div> <img src="./images/lesson-photo-2.png" alt="" /></div>
        <div> <img src="./images/lesson-photo-3.png" alt="" /></div>
        <div> <img src="./images/lesson-photo-4.png" alt="" /></div>
        <div> <img src="./images/lesson-photo-5.png" alt="" /></div>
        <div> <img src="./images/lesson-photo-6.png" alt="" /></div>
      </div>
    </StyledLessons>
  );
};

export default Lessons;
