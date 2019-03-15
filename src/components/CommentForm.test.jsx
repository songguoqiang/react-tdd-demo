import React from "react";
import { render, fireEvent } from "react-testing-library";
import CommentForm from "./CommentForm";

describe("Comment Form", () => {
  test("should render the form with input fields for author, comment, and a submit button", () => {
    // Act
    const addComment = jest.fn();
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <CommentForm addComment={addComment} />
    );

    // Assert
    const commentTextfieldNode = getByPlaceholderText("Write something...");
    const nameFieldNode = getByLabelText("Your Name");
    const submitButton = getByText("Add Comment");

    expect(commentTextfieldNode).toBeDefined();
    expect(nameFieldNode).toBeDefined();
    expect(submitButton).toBeDefined();

    checkTheFormIsEmpty();
    expect(submitButton).toBeDisabled();
  });

  test("when user fills in comment and name, the submit button is enabled", () => {
    // Arrange
    const newComment = {
      comment: "Never put off until tomorrow what can be done today.",
      author: "Sensei Wu"
    };

    // Act
    const addComment = jest.fn();
    const dom = render(<CommentForm addComment={addComment} />);
    fillComment(dom, newComment);

    // Assert
    const form = document.querySelector('[data-testid="comment-form"]');
    expect(form).toHaveFormValues(newComment);

    const submitButton = dom.getByText("Add Comment");
    expect(submitButton).not.toBeDisabled();
  });
});

function checkTheFormIsEmpty() {
  const form = document.querySelector('[data-testid="comment-form"]');
  expect(form).toHaveFormValues({
    author: "",
    comment: ""
  });
}

function fillComment(dom, newComment) {
  const { getByLabelText, getByPlaceholderText } = dom;
  const { comment, author } = newComment;

  const commentTextfieldNode = getByPlaceholderText("Write something...");
  fireEvent.change(commentTextfieldNode, { target: { value: comment } });

  const nameFieldNode = getByLabelText("Your Name");
  fireEvent.change(nameFieldNode, { target: { value: author } });
}
