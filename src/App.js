import React, {Component} from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";

import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        todos: []
    };

    this.ekle = this.ekle.bind(this);
    this.todoSil = this.todoSil.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  componentDidMount() {
    let localTodos = window.localStorage.getItem("todos");
    if(localTodos){
      localTodos  = JSON.parse(localTodos);
    }
    this.setState({
      todos: localTodos || []
    })
  }

  ekle(newValue){
      this.setState({
        todos: [...this.state.todos].concat([
            { content: newValue, id: Math.random(), checked: false}
        ])
      }, () => {
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
      })
  }

  todoSil(id){
      const newArray = this.state.todos.filter((todo) => {
         return todo.id !== id;
      });
      this.setState({
          todos: newArray
      }, () => {
          window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      });
  }

  removeAll(){
    this.setState({
        todos: []
    }, () => {
        window.localStorage.removeItem("todos");
    })
  }

  toggleComplete(id){
      const newArr = this.state.todos.map((todo) => {
          if(id === todo.id){
              let currentTodo = {...todo};
              currentTodo.checked = !currentTodo.checked;
              return currentTodo;
          }else{
              return todo;
          }
      });
      this.setState({
          todos: newArr
      }, () => {
          window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      });
  }

  render(){
    return (
        <div className="App">
          <div>
            <AddTodo
              onAdd={this.ekle}
            />
            <RemoveAll
             onRemove={this.removeAll}
            />
          </div>
          <div>
            <TodoList todos={this.state.todos} todoSil={this.todoSil} toggleComplete={this.toggleComplete}/>
          </div>
        </div>
    );
  }
}

export default App;
