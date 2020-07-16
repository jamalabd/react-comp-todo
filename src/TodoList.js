import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todo1: [],
    todo2: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      }
    ]
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(data => data.json())
      .then(res => {
        this.setState({ todo1: [...res] });
      });
  }

  toggleComplete = id => {
    this.setState({
      todo1: this.state.todo1,
      todo2: this.state.todo2.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
    console.log(this.state);
  };

  render() {
    // console.log(this.state.todo2);
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Add Todo</h2>
        {this.state.todo2.map(todo => (
          <Todo
            todo={todo}
            check={() => {
              this.toggleComplete(todo.id);
            }}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
