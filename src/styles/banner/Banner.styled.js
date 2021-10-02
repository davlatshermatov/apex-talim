import styled from "styled-components";

export const StyledBanner = styled.div`
  > div {
    color: white;
    background-image: url("./images/background-image.png");
    background-repeat: repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    /* position: relative; */
    top: 0;
    text-align: center;
    width: 100%;
  }

  .overlay {
    background-color: #00445b;
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    height: 100vh;
  }
`;

export const BannerDetailsStyled = styled.div`
  margin-top: 100px;
  position: absolute;
  top: 100px;
  width: 100%;

  > h1 {
    font-size: 43px;
    font-weight: 700;
  }

  p {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 60px;
  }

  > div {
    padding: 0 400px;
  }
`;
