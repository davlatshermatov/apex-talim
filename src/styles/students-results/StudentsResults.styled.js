import styled from "styled-components";

export const StyledStudentsResults = styled.div`
  margin: 100px 0;
  /* display: flex; */

  > h1 {
    font-weight: 700;
    color: #00445b;
    flex: 1;
    margin-bottom: 80px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    > div {
      display: block;
    }
  }

  @media (max-width: 640px) {
  }
`;

export const StyledResultBox = styled.div`
  width: 100%;
  text-align: center;

  img {
    object-fit: cover;
    height: 110px;
    border-radius: 50%;
    top: 0%;
  }

  .img {
    position: relative;
  }

  > div {
    margin-top: -55px;
    text-align: start;
    padding: 20px 40px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.13);
  }

  h3 {
    margin-top: 60px;
    font-size: 18px;
  }

  p {
    letter-spacing: 2%;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    width: 100%;

    >div {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 640px) {
  }
`;
