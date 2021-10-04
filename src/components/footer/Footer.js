import React from "react";
import { Container } from "../../styles/common/Container.styled";
  import { StyledFooter } from "../../styles/footer/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <h1>Aloqa</h1>

        <div className="form">
          <input type="text" placeholder="Ism va familiyangizni yozing" />
          <input type="text" placeholder="Telefon raqamingizni yozing" />
          <input type="email" placeholder="Email manzilingizni yozing" />
          <button className="button"> yuborish</button>
        </div>
        
        <div className="line"></div>
        <div className="logo">
          <img src="./images/logo-2.svg" alt="" />
          <p>©2021. Apex ta’lim. Xizmatlar litsenziyalangan.</p>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
