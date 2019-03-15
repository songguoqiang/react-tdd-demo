import React from "react";
import { storiesOf } from "@storybook/react";

import CommentForm from "./CommentForm";

storiesOf("CommentForm", module).add("empty form", () => <CommentForm />);
