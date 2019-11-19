import React, {Component} from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";
import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        todos: [],
        completedTodos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeAllTodos = this.removeAllTodos.bind(this);
    this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this);
  }

  componentDidMount() {
    // Component oluştuktan sonra gerekli olan datayı localstoragedan getiriyoruz.
    let localTodos = window.localStorage.getItem("todos");
    let localCompletedTodos = window.localStorage.getItem("completedTodos");

    if(localTodos){
      localTodos  = JSON.parse(localTodos);
      localCompletedTodos  = JSON.parse(localCompletedTodos);
    }
    // Getirdiğimiz datayı state'e kaydediyoruz.
    this.setState({
      todos: localTodos || [],
      completedTodos: localCompletedTodos || []
    })
  }

  addTodo(newTodo){
      // Parametre olarak inputtan yeni eklenen değeri "newTodo" olarak alıyoruz.
      // State'i mutate etmemek için rest operatörü ile bir kopyalama yapıp yeni todoyu concat ile ekliyoruz.
      this.setState({
        todos: [...this.state.todos].concat([
            { content: newTodo, id: Math.random(), checked: false}
        ])
      }, () => {
          // Todo ekrana eklendikten sonra bunu localstorage'a da ekliyoruz.
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
      })
  }

  removeTodo(id){
      // Silinecek todo'nun idsini parametre olarak alıyoruz.
      // State içerisindeki todolardan filter ile bu id'yi çıkarıyoruz.
      // Mutate etmemk için filter kullandık, filter bize yeni bir array döner.
      const newArray = this.state.todos.filter((todo) => {
         return todo.id !== id;
      });
      this.setState({
          todos: newArray
      }, () => {
          window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      });
  }

  removeAllTodos(){
    this.setState({
        todos: [],
        completedTodos: []
    }, () => {
        window.localStorage.removeItem("todos");
        window.localStorage.removeItem("completedTodos")
    })
  }

  toggleCompleteStatus(id){
      // Map ile mevcut todolar arasında döngüye girip, değiştirmek istediğimi farklı şekilde dönüyorum.
      // Aradığım itemin checked statusunu değiştiriyorum, rest ile kopyalayarak yani mutate etmeden.
      // Diğer elemanları olduğu gibi dönüyorum, "return todo";
      let completedTodo = this.state.completedTodos;

      let newArr = this.state.todos.map((todo) => {
          if(id === todo.id){
              let currentTodo = {...todo};
              currentTodo.checked = true;
              completedTodo.push(currentTodo);
              return currentTodo !== todo;
          }

          else{
              return todo;
          }
      });


      this.setState({
          todos: newArr,
          completedTodos: completedTodo
      }, () => {
          window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
          window.localStorage.setItem("completedTodos", JSON.stringify(this.state.completedTodos));
      });

  }

  render(){
    return (
        <div className="App" id="todo">
            <div className="todo-list todo-list-add">
                <h3>Todo Ekle / Sil</h3>
                <div>
                    <AddTodo   onTodoAdd={this.addTodo} />
                    <RemoveAll onRemoveAll={this.removeAllTodos}/>
                </div>
            </div>

            <TodoList
                title="Tamamlanmamış Todolar"
                todos={this.state.todos}
                onTodoRemove={this.removeTodo}
                onCheckedToggle={this.toggleCompleteStatus} />

            <TodoList
                title="Tamamlanmış Todolar"
                todos={this.state.completedTodos}
                onTodoRemove={this.removeTodo}
                onCheckedToggle={this.toggleCompleteStatus}/>

        </div>
    );
  }
}

export default App;
