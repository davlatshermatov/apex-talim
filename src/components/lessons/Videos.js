import React from "react";
import { StyledVideos } from "../../styles/lessons/Videos.styled";

const Videos = () => {
  return (
    <StyledVideos>
      <h1>Darslardan videolavhalar</h1>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gXH7_XaGuPc"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iAguE62acA8"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JNl1_hRwpXE"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>
    </StyledVideos>
  );
};

export default Videos;
