import React from "react";
import CommentCard from "./CommentCard";
import PropTypes from "prop-types";

const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <CommentCard key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
