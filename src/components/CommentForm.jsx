import React, { Component } from "react";

class CommentForm extends Component {
  initialState = {
    comment: "",
    author: ""
  };
  state = this.initialState;

  hasInvalidFields = () => {
    const { comment, author } = this.state;
    if (comment.trim() !== "" && author.trim() !== "") {
      return false;
    }
    return true;
  };

  render() {
    const { comment, author } = this.state;
    const isDisabled = this.hasInvalidFields() ? true : null;
    return (
      <form data-testid="comment-form">
        <div>
          <textarea
            placeholder="Write something..."
            name="comment"
            value={comment}
            readOnly={true}
          />
        </div>
        <div>
          <label htmlFor="author" aria-labelledby="author">
            Your Name
          </label>
          <input
            id="author"
            type="text"
            name="author"
            value={author}
            readOnly={true}
          />
        </div>
        <button disabled={isDisabled}>Add Comment</button>
      </form>
    );
  }
}

export default CommentForm;
