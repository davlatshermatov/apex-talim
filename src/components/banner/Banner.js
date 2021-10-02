import React from "react";
import { Button } from "../../styles/common/Button";
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
          <Button>kursga yozilish</Button>
        </BannerDetailsStyled>
      </div>
    </StyledBanner>
  );
};

export default Banner;
