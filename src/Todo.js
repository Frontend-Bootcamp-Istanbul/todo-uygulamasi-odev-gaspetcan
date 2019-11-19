import React from 'react';

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div
            className={itemClass}
            onClick={checked ? null : () => {props.onCheckedToggle(id)}}
        >
            {content}
            {   content == null || checked ?
                null :
                <span
                    className="remove-todo"
                    onClick={(e) => {
                        e.stopPropagation();
                        props.onTodoRemove(id)
                    }}>X</span>
            }
            </div>
    );
}

export default Todo;
