import React from "react";
import { storiesOf } from "@storybook/react";

import CommentCard from "./CommentCard";

export const comment = {
  comment: "Well Done!!!",
  author: "Gordon"
};

storiesOf("CommentCard", module).add("default", () => (
  <CommentCard {...comment} />
));
