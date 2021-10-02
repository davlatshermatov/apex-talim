import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #00445b;
  color: white;
  height: 450px;

  h1 {
    padding-top: 70px;
    font-size: 33px;
  }

  .form {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  input {
    width: 26%;
    /* padding: 5px; */
    font-size: 18px;
    padding-left: 20px;
    outline: none;
    border: none;
  }

  .line {
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 30%;
    margin:auto;
    margin-top:50px
  }

  .logo {
    display: flex;
    align-items: baseline;
    width: 70%;
    justify-content: space-between;
    margin-top:80px;

    > img:hover {
      cursor: pointer;
    }
  }
`;
