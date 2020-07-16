import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <span style={{ textDecoration: !todo.completed ? "line-through" : "" }}>
          {todo.title}
        </span>
        <button onClick={this.props.check}> x </button>
      </div>
    );
  }
}

export default Todo;
