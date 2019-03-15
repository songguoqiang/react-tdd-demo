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

  handleOnChange = ({ target: { name, value } }) =>
    this.setState(_prevState => ({
      [name]: value
    }));

  handleOnSubmit = event => {
    event.preventDefault();
    const newComment = this.state;
    this.createComment(newComment);
  };

  createComment = newComment => {
    this.props.addComment(newComment);
    this.clearForm();
  };

  clearForm = () => this.setState(_prevState => this.initialState);

  render() {
    const { comment, author } = this.state;
    const isDisabled = this.hasInvalidFields() ? true : null;
    return (
      <form onSubmit={this.handleOnSubmit} data-testid="comment-form">
        <div>
          <textarea
            placeholder="Write something..."
            name="comment"
            value={comment}
            onChange={this.handleOnChange}
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
            onChange={this.handleOnChange}
          />
        </div>
        <button disabled={isDisabled}>Add Comment</button>
      </form>
    );
  }
}

export default CommentForm;
