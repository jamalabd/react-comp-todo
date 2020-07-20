import React, { Component } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

class TodoList extends Component {
  state = {
    todo1: [],
    todo2: []
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
  };

  addTodo = todo => {
    this.setState({
      todo1: this.state.todo1,
      todo2: [todo, ...this.state.todo2]
    });
  };

  totolTodo = (todo, num) => {
    todo.completed ? num + 1 : num - 1;
    return num;
  };

  render() {
    // console.log(this.state.todo2);
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Add Todo</h2>
        <TodoInput
          addTodo={this.addTodo}
          todo={this.state.todo2}
          totolTodo={this.totolTodo}
        />
        {this.state.todo2.map(todo => (
          <Todo
            todo={todo}
            toggleComplete={() => {
              this.toggleComplete(todo.id);
            }}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
