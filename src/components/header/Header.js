import React from "react";
import { StyledHeader } from "../../styles/header/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
     <img src="./images/logo.svg" alt="" />
         <ul>
             <li>Yangiliklar</li>
             <li>Kurslar</li>
             <li>Ustozlar</li>
             <li>Fotolavhalar</li>
             <li>Videolavhalar</li>
             <li>Natijalar</li>
             <li>Izohlar</li>
             <li>Aloqa</li>
         </ul>
    </StyledHeader>
  );
};

export default Header;
