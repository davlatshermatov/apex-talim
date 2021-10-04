import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #00445b;
  color: white;

  h1 {
    padding-top: 70px;
    font-size: 33px;
  }

  .form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }

  input {
    width: 28%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  .button {
    width: 10%;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.button};
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
  }

  .line {
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 30%;
    margin: auto;
    margin-top: 50px;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    margin-top: 15px;
  }

  img:hover {
    cursor: pointer;
  }

  @media (max-width: 992px) {
    input {
      padding-left: 15px;
      font-size: 14px;
    }

    .button {
      padding: 5px 0;
      font-size: 12px;
    }

    .logo {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    height: 550px;
    .form {
      display: block;
    }

    input {
      width: 100%;
      margin-bottom: 10px;
    }

    .logo {
      width: 100%;
      text-align: center;
      margin-top: 30px;
    }

    .button {
      padding: 15px 0;
      width: 100%;
    }

    img {
      object-fit: contain;
      height: 70px;
    }

    p {
      font-size: 9px;
    }
  }
  /*
      input {
        width: 100%;
      } 

     @media (max-width: 640px) {
    } */
`;
