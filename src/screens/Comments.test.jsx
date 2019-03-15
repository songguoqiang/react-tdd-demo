import React from "react";
import { render, fireEvent, wait } from "react-testing-library";
import { mockAxios } from "../testHelper";

import Comments from "./Comments";

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

const comments = [comment1, comment2];

afterAll(() => {
  mockAxios.restore();
});

describe("Comments Screen", () => {
  const comment1 = comments[0];
  const comment2 = comments[1];

  test("It fetches comments from back end API and renders them to the page", async () => {
    // Arrange
    mockAxios.onGet("/api/comments").reply(200, comments);

    // Act
    const { getByText } = render(<Comments />);
    await wait(() => getByText(comment1.comment));

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

  test("When a new comment is submitted, it submits the comment to back end, then renders in the comment list and clears out form upon submission", async () => {
    // Arrange
    const newComment = {
      id: 3,
      comment: "Brave new world of testing",
      author: "Spongebob"
    };

    mockAxios.onGet("/api/comments").reply(200, comments);
    mockAxios.onPost("/api/comments").reply(200, newComment);

    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <Comments />
    );
    await wait(() => getByText(comment1.comment));

    const submitButton = getByText("Add Comment");
    const commentTextfieldNode = getByPlaceholderText("Write something...");
    const nameFieldNode = getByLabelText("Your Name");

    fireEvent.change(commentTextfieldNode, {
      target: { value: newComment.comment }
    });

    fireEvent.change(nameFieldNode, { target: { value: newComment.author } });
    fireEvent.click(submitButton);

    await wait(() => getByText(`- ${newComment.author}`));

    // Assert
    expect(commentTextfieldNode.value).toEqual("");
    expect(nameFieldNode.value).toEqual("");
  });
});
