import React, { Component } from "react";
import AddTodo from "C:/Users/tebib/.ssh/to-do-list_week1-TebibuS/src/component/AddTodo";
import Todos from "C:/Users/tebib/.ssh/to-do-list_week1-TebibuS/src/component/todos";
import "./Home.css";

// Rest of the code remains the same





class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [], // Initialize an empty array for todos
    };
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="Home">
        <AddTodo addTodo={this.addTodo} />
        <h1>Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default Home;
