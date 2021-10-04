import React from "react";
import { StyledTeachers } from "../../styles/teachers/Teachers.styled";
import TeacherBox from "./TeacherBox";
import teachers from "./TeachersContent";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "../../CarouselConfig";

const Teachers = () => {
  return (
    <StyledTeachers>
      <h1>Ustozlar </h1>
      <div>
        <Carousel
          showArrows={false}
          itemPadding={[10, 10]}
          enableSwipe={true}
          enableMouseSwipe={true}
          breakPoints={breakpoints}
        >
          {teachers.map((teacher, index) => (
            <TeacherBox key={index} teacher={teacher} />
          ))}
        </Carousel>
      </div>
    </StyledTeachers>
  );
};

export default Teachers;
