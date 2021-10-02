import React from "react";
import { StyledCommentBox } from "../../styles/comments/Comments.styled";

const CommentBox = ({ comment }) => {
  return (
    <StyledCommentBox>
      <div>
        <img src={"./images/" + comment.img + ".png"} alt="" />
        <div className="details">
          <h3>{comment.name}</h3>
          <span>{comment.group}</span>
          <p>{comment.comment}</p>
          <div className="ratings">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
      </div>
    </StyledCommentBox>
  );
};

export default CommentBox;
