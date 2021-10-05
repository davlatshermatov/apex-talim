import React from "react";
import { StyledCourses } from "../../styles/coures/Courses.styled";
import CourseBox from "./CourseBox";
import CourseContent from "./CourseContent";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "../../CarouselConfig";

const Courses = () => {
  const courses = CourseContent;

  return (
    <StyledCourses id="courses">
      <h1>Kurslar </h1>
      <div>
        <Carousel
          showArrows={false}
          itemPadding={[10, 10]}
          enableSwipe={true}
          enableMouseSwipe={true}
          breakPoints={breakpoints}
        >
          {courses.map((course, index) => (
            <CourseBox key={index} course={course} />
          ))}
        </Carousel>
      </div>
    </StyledCourses>
  );
};

export default Courses;
