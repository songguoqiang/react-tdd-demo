import React, { Component } from "react";
import axios from "axios";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

export default class Comments extends Component {
  state = {
    comments: null
  };
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments() {
    axios
      .get("/api/comments")
      .then(response => response.data)
      .then(comments => this.setState({ comments }))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentForm />

        {comments && comments.length ? (
          <CommentList comments={comments} />
        ) : null}
      </div>
    );
  }
}
