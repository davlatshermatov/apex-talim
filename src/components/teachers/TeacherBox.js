import React from "react";
import { StyledTeacherBox } from "../../styles/teachers/Teachers.styled";

const TeacherBox = ({ teacher }) => {
  return (
    <StyledTeacherBox>
      <div>
        <img src={"./images/" + teacher.img + ".png"} alt={teacher.name} />
        <div className="details">
          <h3>{teacher.name}</h3>
          <p>{teacher.subject}</p>
          <p>{teacher.experience}</p>
          <p>{teacher.students}</p>
        </div>
      </div>
    </StyledTeacherBox>
  );
};

export default TeacherBox;
