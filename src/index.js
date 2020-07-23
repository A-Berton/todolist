import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      count: 0,
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      value: "",
      todos: this.state.todos.concat(this.state.value)
    });
  }
  handleClick(item, id) {
    let todos = [...this.state.todos];
    todos.splice(id, 1);
    this.setState({
      todos
    });
  }

  renderList() {
    return (
      <ul className="todos">
        {this.state.todos.map((item, i) => (
          <li id={i} key={i} className="todo">
            {item}
            <span id="delete" onClick={() => this.handleClick(item, i)}>
              x
            </span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <ListInput
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div className="mylist">{this.renderList()}</div>
      </div>
    );
  }
}

function ListInput(props) {
  return (
    <div className="wrap">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="name"
          value={props.value}
          onChange={props.onChange}
        />
        <input id="ajouter" type="submit" value="Ajouter" />
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Ma todolist</h1>
      <h2>Add a new task and start working !</h2>
      <TodoInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
