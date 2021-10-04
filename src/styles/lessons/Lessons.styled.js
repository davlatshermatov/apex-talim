import styled from "styled-components";

export const StyledLessons = styled.div`
  justify-content: space-between;
  margin: 100px 0;

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

  > div > div {
    width: 32%;
    margin-bottom: 20px;
    overflow: hidden;
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    > div {
      display: block;
    }
    > div > div {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
  }
`;
