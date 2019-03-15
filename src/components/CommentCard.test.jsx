import React from "react";
import { render } from "react-testing-library";
import CommentCard from "./CommentCard";

describe("Comment Card", () => {
  const props = {
    comment: "React Testing Library is great",
    author: "Luke Ghenco"
  };

  test("should render the comment", () => {
    // Act
    const { getByText } = render(<CommentCard {...props} />);

    // Assert
    const commentNode = getByText(props.comment);
    expect(commentNode).toBeDefined();
  });
});
