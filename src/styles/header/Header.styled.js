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

  a {
    text-decoration: none;
    color: white;
  }

   img:hover {
    cursor: pointer;
  }

  .menu-icon {
    display: none;
  }

  > .nav-menu {
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    /* font-weight: 500; */

    > li {
      list-style-type: none;
    }

    > li:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.1s ease-out;
    }
  }

  @media (max-width: 992px) {
    width: 100vw;
    /* display: block; */
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .nav-menu {
      position: relative;
      flex-direction: column;
      width: 100%;
      height: 96vh;
      position: absolute;
      top: -10px;
      left: -100%;
      opacity: 1;
      transition: all 0.3s;

      > li {
        width: 90%;
        margin: 0;
      }

      > li:hover {
        cursor: pointer;
        transform: translateX(20px);
        transition: all 0.2s;
      }
    }

    .nav-menu.active {
      background: rgba(0, 0, 0, 0.95);
      left: 0;
      opacity: 1;
      transition: all 0.2s ease;
      z-index: 1;
    }

    .menu-icon {
      margin-right: 20px;
      display: block;
      float: right;
      font-size: 25px;
      cursor: pointer;
      z-index: 10;
    }

    .menu-icon:hover {
    }

     img {
      margin-left: 30px;
      height: 60px;
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
