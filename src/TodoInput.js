import React, { Component } from "react";
import shortId from "shortid";

class TodoInput extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo({
      title: this.state.title,
      id: shortId.generate(),
      completed: false
    });
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="title"
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Todo..."
          />
          <button onClick={this.onSubmit}> Submit </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
