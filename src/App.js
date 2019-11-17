import React, {Component} from 'react';
import TodoList from "./TodoList";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        inputVal: "",
        todos: []
    };

    this.onInputChange = this.onInputChange.bind(this);
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

  ekle(e){
    e.preventDefault();
    // 5 karakterden küçükse eklemeyelim.
    const currentValue = this.state.inputVal;
    const hasItem = this.state.todos.some((todo) => {
      return todo.content === currentValue;
    });
    if(currentValue.length < 5 || hasItem){
      return false;
    }

    this.setState({
      todos: [...this.state.todos].concat([{
        content: currentValue,
        id: Math.random()
      }])
    }, () => {
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      this.setState({
        inputVal: ""
      });
    });
  }

  onInputChange(e){
    const newVal = e.target.value;
    this.setState({
      inputVal: newVal
    });
  }

  render(){
    return (
        <div className="App">
          <div>
            <form onSubmit={this.ekle}>
              <input type="text" value={this.state.inputVal} onChange={this.onInputChange}/>
              <button>Ekle</button>
            </form>
          </div>
          <div>
            <TodoList todos={this.state.todos}/>
          </div>
        </div>
    );
  }
}

export default App;
