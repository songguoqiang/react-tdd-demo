import React from "react";
import { storiesOf } from "@storybook/react";

import CommentList from "./CommentList";

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

storiesOf("CommentList", module).add("default", () => (
  <CommentList {...props} />
));
