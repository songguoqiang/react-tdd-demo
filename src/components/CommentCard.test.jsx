import React from "react";
import { render } from "react-testing-library";
import CommentCard from "./CommentCard";
import { expectPropTypeCheckToFail } from "../testHelper";

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
  test("should render the author", () => {
    // Act
    const { getByText } = render(<CommentCard {...props} />);

    // Assert
    const authorNode = getByText("- " + props.author);
    expect(authorNode).toBeDefined();
  });

  test("comment prop should be a string", () => {
    // Arrange
    const propsWithWrongCommentType = {
      comment: true,
      author: "Luke Ghenco"
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithWrongCommentType} />)
    );
  });

  test("comment prop is required", () => {
    // Arrange
    const propsWithoutComment = {
      author: "Luke Ghenco"
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithoutComment} />)
    );
  });

  test("author prop should be string", () => {
    // Arrange
    const propsWithWrongAuthorType = {
      comment: "React Testing Library is great",
      author: true
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithWrongAuthorType} />)
    );
  });
});

test("author props is required", () => {
  // Arrange
  const propsWithoutAuthor = {
    comment: "React Testing Library is great"
  };

  // Act
  expectPropTypeCheckToFail(() =>
    render(<CommentCard {...propsWithoutAuthor} />)
  );
});
