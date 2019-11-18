import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="todo-list">
                <h3>{this.props.title}</h3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            onTodoRemove={this.props.onTodoRemove}
                            onCheckedToggle={this.props.onCheckedToggle}
                        />
                    })
                }
            </div>
        );
    }
}

export default TodoList;
