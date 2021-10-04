  /* margin-bottom: 80px; */
import React from "react";
import {
  StyledBanner,
  BannerDetailsStyled,
} from "../../styles/banner/Banner.styled";

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <div className="overlay"></div>

        <BannerDetailsStyled>
          <h1>Talaba bo‘lishingizga albatta ishonamiz</h1>
          <div>
            <p>
              Shaxmatda yo’lga chiqqan piyoda, bir kun kelib albatta vazir
              bo’ladi.
            </p>
          </div>
          <button className="button">kursga yozilish</button>
        </BannerDetailsStyled>
      </div>
    </StyledBanner>
  );
};

export default Banner;
