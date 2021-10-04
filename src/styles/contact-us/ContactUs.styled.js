import styled from "styled-components";

export const StyledContactUs = styled.div`
  margin: 100px 0;  

  a {
    text-decoration: none;
    align-items: center;
  }

  > h1 {
    font-weight: 700;
    flex: 1;
    margin-bottom: 80px;
  }

  .contact-details {
    margin-top:30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > a {
      width: 22%;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #000;

      > .icon {
        margin-right: 15px;
      }
    }


    .social-links {
      width: 30%;
      display: flex;
      align-items: center;
    }

    .social-icons {
      display: flex;

      > .icon {
        margin-left: 10px;
      }
    }

    .icon {
      font-size: 25px;
      color: #00445b;
      transition: all .4s ;
    }

    .fa-instagram:hover {
      color:#E0446C;
    }

    .fa-telegram-plane:hover{
      color: #0396DE;
    }

    .fa-facebook-square:hover {
      color:#385490;
    }
  }

  @media (max-width: 992px) {
    p {
      font-size: 12px;
    }

    .icon {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .contact-details {
      display: block;

      >a {
        width: 100%;
        margin-bottom:20px;
      }

      .social-links {
        width:100%;
      }
    }

    @media (max-width: 640px) {
    }
  }
`;
