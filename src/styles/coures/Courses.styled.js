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
    justify-content: space-between;
    width: 100%;
  }
`;

export const StyledCourseBox = styled.div`
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
    letter-spacing: 0.02em;
  }


  .details {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.13);
    padding: 10px 40px;
  }

  .details > button {
    margin: 25px 0;
  }
`;
