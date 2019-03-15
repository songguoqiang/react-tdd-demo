import React from "react";

export default function CommentCard({ comment, author }) {
  return (
    <div>
      <p>{comment}</p>
      <p>- {author}</p>
    </div>
  );
}
