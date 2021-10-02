import React from "react";
import NewsBox from "./NewsBox";
import NewsContent from "./NewsContent";
import { StyledNews } from "../../styles/news/News.styed";

const News = () => {
  const contents = NewsContent;

  return (
    <StyledNews>
      <h1>Yangiliklar</h1>
      <div>
        {contents.map((news,index) => (
          <NewsBox key={index} news={news} />
        ))}
      </div>
    </StyledNews>
  );
};

export default News;
