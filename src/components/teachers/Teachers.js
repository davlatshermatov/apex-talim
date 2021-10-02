import React from "react";
import { StyledTeachers } from "../../styles/teachers/Teachers.styled";
import TeacherBox from "./TeacherBox";
import teachers from "./TeachersContent"
const Teachers = () => {



  return (
    <StyledTeachers>
      <h1>Ustozlar </h1>
      <div>
        {teachers.map((teacher,index) => (
          <TeacherBox key={index} teacher={teacher} />
        ))}
      </div>
    </StyledTeachers>
  );
};

export default Teachers;
