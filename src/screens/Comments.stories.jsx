import React from "react";
import { storiesOf } from "@storybook/react";
import Comments from "./Comments";
import { mockAxios } from "../testHelper";

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

const newComment = {
  id: 3,
  comment: "Brave new world of testing",
  author: "Spongebob"
};

mockAxios.onGet("/api/comments").reply(200, comments);
mockAxios.onPost("/api/comments").reply(200, newComment);

storiesOf("Comments", module).add("default", () => <Comments />);
