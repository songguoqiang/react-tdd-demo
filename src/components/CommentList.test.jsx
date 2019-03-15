import React from "react";
import { render } from "react-testing-library";
import CommentList from "./CommentList";

describe("Comment List", () => {
  test("It renders a list of comment cards with their comment and author tag", () => {
    // Arrange
    const comment1 = {
      id: 1,
      comment: "I do love writing tests",
      author: "The Notester"
    };
    const comment2 = {
      id: 2,
      comment: "Nothing is better than a good comment app",
      author: "Comment Hater"
    };
    const props = {
      comments: [comment1, comment2]
    };

    // Act
    const { getByText } = render(<CommentList {...props} />);

    // Assert
    const firstCommentNode = getByText(comment1.comment);
    const firstAuthorTagNode = getByText(`- ${comment1.author}`);
    const secondCommentNode = getByText(comment2.comment);
    const secondAuthorTagNode = getByText(`- ${comment2.author}`);
    expect(firstCommentNode).toBeDefined();
    expect(firstAuthorTagNode).toBeDefined();
    expect(secondCommentNode).toBeDefined();
    expect(secondAuthorTagNode).toBeDefined();
  });
});
