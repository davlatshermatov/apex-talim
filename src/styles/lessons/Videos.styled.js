import styled from "styled-components";

export const StyledVideos = styled.div`
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

  iframe {
    object-fit: cover;
    width: 30%;
    height: 250px;
  }
`;
