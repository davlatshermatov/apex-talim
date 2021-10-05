import React, { useState } from "react";
import {
  StyledBanner,
  BannerDetailsStyled,
  MyStyledModal,
} from "../../styles/banner/Banner.styled";
import { Button, Modal } from "react-bootstrap";
import { StyledHeader } from "../../styles/header/Header.styled";

const Banner = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <StyledBanner>
      <div>
        <div className="overlay"></div>
        <BannerDetailsStyled>
          {myModal(show, handleShow)}
          <h1 className="title">Talaba bo‘lishingizga albatta ishonamiz</h1>
          <div>
            <p>
              Shaxmatda yo’lga chiqqan piyoda, bir kun kelib albatta vazir
              bo’ladi.
            </p>
          </div>
          <button className="button" onClick={handleShow}>
            kursga yozilish
          </button>
        </BannerDetailsStyled>
      </div>
    </StyledBanner>
  );
};

function myModal(show, handleClose) {
  const styleBody = {
    padding: "0",
  };


  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Body style={styleBody}>
        <MyStyledModal>
          <div className="header">
            <img src="./images/logo.svg" alt="" />
            <i className="fas fa-times" onClick={handleClose}></i>
          </div>
          <div className="body">
            <h1>Kursga yozilish</h1>

            <form action="#">
              <input type="text" placeholder="Ism va Familyangzni yozing" />
              <input type="text" placeholder="Telefon raqamingizni yozing" />

              <button className="register">Kursga yozilish</button>
            </form>
          </div>
        </MyStyledModal>
      </Modal.Body>
    </Modal>
  );
}

export default Banner;
