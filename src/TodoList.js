import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.todos.length > 6){
            window.scrollTo(0, 100);
        }
    }

    render(){
        return (
            <div>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            todoSil={this.props.todoSil}
                        />
                    })
                }
            </div>
        );
    }
}

export default TodoList;
