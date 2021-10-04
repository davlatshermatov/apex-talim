import React from "react";
import NewsBox from "./NewsBox";
import NewsContent from "./NewsContent";
import { StyledNews } from "../../styles/news/News.styed";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "../../CarouselConfig";

const News = () => {
  const contents = NewsContent;
  return (
    <StyledNews>
      <h1>Yangiliklar</h1>
      <div>
        <Carousel
         showArrows={false}
         itemPadding={[10, 10]}
         enableSwipe={true}
         enableMouseSwipe={true}
         breakPoints={breakpoints}
        >
          {contents.map((news, index) => (
            <NewsBox key={index} news={news} />
          ))}
        </Carousel>
      </div>
    </StyledNews>
  );
};

export default News;
