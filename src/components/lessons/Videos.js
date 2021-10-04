import React from "react";
import { StyledVideos } from "../../styles/lessons/Videos.styled";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "../../CarouselConfig";

const Videos = () => {
  return (
    <StyledVideos>
      <h1>Darslardan videolavhalar</h1>
      <div>
        <Carousel
          showArrows={false}
          itemPadding={[10, 10]}
          enableSwipe={true}
          enableMouseSwipe={true}
          breakPoints={breakpoints}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iAguE62acA8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iAguE62acA8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iAguE62acA8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iAguE62acA8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JNl1_hRwpXE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel>
      </div>
    </StyledVideos>
  );
};

export default Videos;
