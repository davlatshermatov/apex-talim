import React from "react";
import { StyledComments } from "../../styles/comments/Comments.styled";
import CommentBox from "./CommentBox";
import comments from "./CommentsContent";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "../../CarouselConfig";

const Comments = () => {
  return (
    <StyledComments id="comments">
      <h1>Mijozlarimiz izohlari</h1>

      <div>
        <Carousel
          showArrows={false}
          itemPadding={[10, 10]}
          enableSwipe={true}
          enableMouseSwipe={true}
          breakPoints={breakpoints}
        >
          {comments.map((comment, index) => (
            <CommentBox key={index} comment={comment} />
          ))}
        </Carousel>
      </div>
    </StyledComments>
  );
};

export default Comments;
