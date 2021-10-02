import styled from "styled-components";

export const StyledContactUs = styled.div`
  margin: 100px 0;

  > h1 {
    font-weight: 700;
    color: #00445b;
    flex: 1;
    margin-bottom: 80px;
  }

  .contact-details {
    width: 100%;
    /* text-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    font-size: 14px;

    > span {
      width: 25%;
      align-items: center;
      justify-content: center;
      display: flex;

      > div {
        margin-right: 10px;
      }

      .icon {
        font-size: 30px;
      }

      .social-icons {
        font-size: 20px;
        margin-left: 10px;
      }
    }
  }
`;
