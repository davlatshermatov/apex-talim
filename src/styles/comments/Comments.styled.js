import styled from "styled-components";

export const StyledComments = styled.div`
  margin: 100px 0;
  color: black;

   h1 {
    font-weight: 700;
    color: #00445b;
  }

  > div {
    display: flex;
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

  @media (max-width: 640px) {
  }
`;

export const StyledCommentBox = styled.div`
  width: 100%;
  margin-top: 50px;

  img {
    object-fit: contain;
    width: 100%;
  }

  h3 {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  span {
    color: #646464;
    font-size: 14px;
    letter-spacing: 2%;
  }
  p {
    font-size: 14px;
    letter-spacing: 0.02em;
  }

  p:last-child {
    margin-bottom: 40px;
  }

  .details {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.13);
    padding: 10px 40px;
  }

  .ratings {
    color: #fdb44b;
    margin-bottom: 20px;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 640px) {
  }
`;
