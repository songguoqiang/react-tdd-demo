import React from "react";
import PropTypes from "prop-types";

function CommentCard({ comment, author }) {
  return (
    <div>
      <p>{comment}</p>
      <p>- {author}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default CommentCard;
