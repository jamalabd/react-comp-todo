import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todo: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(data => data.json())
      .then(res => {
        console.log(res);
        this.setState({ todo: [...res] });
      });
  }

  render() {
    console.log(this.state.todo);
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Add Todo</h2>
        {/* {this.state.todo.map(todo => (
          <Todo todo={todo} />
        ))} */}
      </div>
    );
  }
}
export default TodoList;
