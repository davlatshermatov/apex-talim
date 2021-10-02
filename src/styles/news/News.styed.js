import styled from "styled-components";

export const StyledNews = styled.div`
  margin-top: 100px;
  color: black;

  > h1 {
    font-weight: 700;
    color: #00445b;
    display: block;
    flex: 1;
  }

  > div {
    display: flex;
    justify-content: space-between;
    overflow: auto;
    width: 100%;
  }
`;

export const StyledNewsBox = styled.div`
  width: 30%;
  margin-top: 50px;

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
`;
