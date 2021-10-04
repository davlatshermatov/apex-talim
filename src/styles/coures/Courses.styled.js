import styled from "styled-components";

export const StyledCourses = styled.div`
  margin: 100px 0;
  color: black;

  > h1 {
    font-weight: 700;
    color: #00445b;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    > div {
      display: block;
    }
  }

  /* @media (max-width: 640px) {
  } */
`;

export const StyledCourseBox = styled.div`
  width: 100%;
  margin: 50px 0;
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
    letter-spacing: 0.02em;
  }

  .details {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.13);
    padding: 10px 40px;
  }

  .details > button {
  }

  .button {
    margin: 25px 0;
    background-color: ${({ theme }) => theme.colors.button};
    padding: 15px 20px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
      transition: all 0.3s ease-in-out;
      font-weight: 700;
    }
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  /* @media (max-width: 640px) {
  } */
`;
