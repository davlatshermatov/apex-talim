import React, { useState } from "react";
import { Link } from "react-scroll";
import { StyledHeader } from "../../styles/header/Header.styled";

const Header = ({ clicked, setClicked }) => {
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <StyledHeader id="header">
      <Link to="header">
        <img src="./images/logo.svg" alt="" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i class={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="news">Yangiliklar</Link>
        </li>
        <li>
          <Link to="courses">Kurslar</Link>
        </li>
        <li>
          <Link to="teachers">Ustozlar</Link>
        </li>
        <li>
          <Link to="photo">Fotolavhalar</Link>
        </li>
        <li>
          <Link to="videos">Videolavhalar</Link>
        </li>
        <li>
          <Link to="results">Natijalar</Link>
        </li>
        <li>
          <Link to="comments">Izohlar</Link>
        </li>
        <li>
          <Link to="contact">Aloqa</Link>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
