import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo, toggleComplete } = this.props;
    return (
      <div style={{ margin: "1rem" }}>
        <span
          key={todo.id}
          style={{
            textDecoration: !todo.completed ? "line-through" : "",
            padding: ".5rem"
          }}
        >
          {todo.title}
        </span>
        <button onClick={toggleComplete}> x </button>
      </div>
    );
    d;
  }
}

export default Todo;
