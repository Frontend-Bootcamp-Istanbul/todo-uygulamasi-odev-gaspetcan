import React, {Component} from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        todos: []
    };

    this.ekle = this.ekle.bind(this);
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
            { content: newValue, id: Math.random()}
        ])
      }, () => {
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
      })
  }

  render(){
    return (
        <div className="App">
          <div>
            <AddTodo
              onAdd={this.ekle}
            />
          </div>
          <div>
            <TodoList todos={this.state.todos}/>
          </div>
        </div>
    );
  }
}

export default App;
