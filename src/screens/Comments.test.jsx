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
});
