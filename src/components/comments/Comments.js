import React from "react";
import { StyledComments } from "../../styles/comments/Comments.styled";
import CommentBox from "./CommentBox";
import comments from "./CommentsContent";

const Comments = () => {
  return (
    <StyledComments>
      <h1>Mijozlarimiz izohlari</h1>

      <div>
        {comments.map((comment,index) => (
          <CommentBox key={index} comment={comment} />
        ))}
      </div>
    </StyledComments>
  );
};

export default Comments;
