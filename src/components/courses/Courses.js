import React from "react";
import { StyledCourses } from "../../styles/coures/Courses.styled";
import CourseBox from "./CourseBox";
import CourseContent from "./CourseContent";

const Courses = () => {
  const courses = CourseContent;

  return (
    <StyledCourses>
      <h1>Kurslar </h1>
      <div>
        {courses.map((course,index) => (
          <CourseBox key={index} course={course} />
        ))}
      </div>
    </StyledCourses>
  );
};

export default Courses;
