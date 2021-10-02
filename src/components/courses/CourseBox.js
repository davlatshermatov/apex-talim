import React from "react";
import { Button } from "../../styles/common/Button";
import { StyledCourseBox } from "../../styles/coures/Courses.styled";

const CourseBox = ({ course }) => {
  return (
    <StyledCourseBox>
      <div>
        <img src={"./images/" + course.img + ".png"} alt={course.subject} />
        <div className="details">
          <p>{course.subject} </p>
          <span>{course.desc}</span>
          <Button fluid thin>
            kursga yozilish
          </Button>
        </div>
      </div>
    </StyledCourseBox>
  );
};

export default CourseBox;
