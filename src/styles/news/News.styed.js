import styled from "styled-components";

export const StyledNews = styled.div`
  margin-top: 100px;
  color: black;
  width: 100%;

  

 

  > h1 {
    font-weight: 700;
    color: #00445b;
    display: block;
    flex: 1;
  }

  > div {
    display: flex; 
    flex-direction: column;
    /*  justify-content: space-between; */
    /* overflow: auto; */
    /* width: 100%;  */
  }

  /* .test {
    display: flex;
  } */

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

export const StyledNewsBox = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 20px;

  img {
    object-fit: contain;
    width: 100%;
  }

  p {
    font-weight: 700;
    font-size: 18px;
  }

  span {
    font-size: 14px;
    color: #646464;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  /* @media (max-width: 640px) {
  } */
`;
