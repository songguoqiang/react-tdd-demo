import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <CommentCard key={comment.id} {...comment} />
    ))}
  </div>
);

export default CommentList;
