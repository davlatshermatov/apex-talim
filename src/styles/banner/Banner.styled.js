import styled from "styled-components";

export const StyledBanner = styled.div`
  overflow-x: hidden;
  > div {
    color: white;
    background-image: url("./images/background-image.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    top: 0;
    text-align: center;
    width: 100vw;
  }

  .overlay {
    background-color: #00445b;
    background-blend-mode: multiply;
    mix-blend-mode: multiply;
    height: 100vh;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    background-size: auto;

    > div,
    .overlay {
      height: 95vh;
    }
  }

  @media (max-width: 640px) {
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

  .button {
    background-color: ${({ theme }) => theme.colors.button};
    padding: 15px 20px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    width: ${(props) => props.width};
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
      transition: all 0.3s ease-in-out;
      font-weight: 700;
    }
  }

  > div {
    padding: 0 200px;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 18px;
      margin: 50px 0;
    }

    > div {
      padding: 0 50px;
    }
  }

  @media (max-width: 640px) {
  }
`;
