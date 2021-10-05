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
    -webkit-font-smoothing: subpixel-antialiased;
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
      letter-spacing: 10.1;
      transform: scale(0.9);
      transition: all 0.3s;
    }
  }

  > div {
    margin: auto;
    width: 40%;
  }

  @media (max-width: 992px) {
    > div {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }

    > div {
      width: 60%;
    }

    p {
      font-size: 20px;
    }

    > div {
      padding: 0 50px;
    }
  }

  @media (max-width: 640px) {
    > div {
      width: 90%;
    }

    p {
      margin-top: 30px;
      font-size: 18px;
    }
  }
`;

export const MyStyledModal = styled.div`
  .header {
    width: 100%;
    height: 120px;
    background-color: #00445b;
    text-align: center;
    padding: 15px;

    > img {
      object-fit: contain;
      height: 90px;
    }

    > i {
      justify-self: flex-end;
      float: right;
      color: #fff;
      font-size: 22px;
    }

    i:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  .body {
    text-align: center;
    padding: 30px 0;

    form {
      display: flex;
      flex-direction: column;
      width: 75%;
      margin: auto;
      margin-top: 40px;
      position: relative;
      height: 300px;
    }

    input {
      border: 0.5px solid #646464;
      padding: 15px;
      width: 100%;
      margin-bottom: 20px;
    }

    .register {
      margin: 30px 0;
      width: 200px;
      background: #00445b;
      padding: 15px;
      border: none;
      color: #fff;
      font-weight: 700;
      position: absolute;
      right:0;
      top:150px;
    }

    background: linear-gradient(
      124.06deg,
      #ecfefa 9.47%,
      #bee9ff 29.35%,
      #dbeaff 60.79%,
      #f3dbff 85.49%
    );
  }
`;
