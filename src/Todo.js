import React from 'react';

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.onCheckedToggle(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();props.onTodoRemove(id)}}>X</span>
        </div>
    );
}

export default Todo;
