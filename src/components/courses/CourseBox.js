import React from "react";
import { StyledCourseBox } from "../../styles/coures/Courses.styled";

const CourseBox = ({ course }) => {
  return (
    <StyledCourseBox>
      <div>
        <img src={"./images/" + course.img + ".png"} alt={course.subject} />
        <div className="details">
          <p>{course.subject} </p>
          <span>{course.desc}</span>
          <button className="button">
            kursga yozilish
          </button>
        </div>
      </div>
    </StyledCourseBox>
  );
};

export default CourseBox;
