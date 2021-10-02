import React from "react";
import { StyledNewsBox } from "../../styles/news/News.styed";

const NewsBox = ({ news }) => {
  return (
    <StyledNewsBox>
      <img src={"./images/" + news.img + ".png"} alt="" />
      <p>{news.description}</p>
      <span> {news.date} </span>
    </StyledNewsBox>
  );
};

export default NewsBox;
