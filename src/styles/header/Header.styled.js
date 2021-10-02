import styled from "styled-components";

export const StyledHeader = styled.header`
  background: transparent;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  color: white;
  width: 100%;
  z-index: 100;

  > img:hover {
    cursor: pointer;
  }

  > ul {
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    font-weight: 500;

    > li {
      list-style-type: none;
    }

    > li:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }

  @media (max-width: 992px) {
    width: 100vw;
    display: block;

    > ul {
      display: none;
    }

    > img {
      margin-left: 40px;
    }
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 10px 0;
  }

  @media (max-width: 640px) {
    background-size: 100%;
  }
`;

export const Logo = styled.img``;
