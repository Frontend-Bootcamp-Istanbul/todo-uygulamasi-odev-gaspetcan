import React from 'react';

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "";
    if(checked){
        itemClass = "checked";
    }
    return (
        <div
        className={itemClass}
            style={{
            margin: "10px"
        }}
        onClick={() => {
            props.toggleComplete(id);
        }}
        >
            {content}
            <span style={{
                backgroundColor: "red",
                fontWeight: "bold",
                display: "inline-block",
                marginLeft: "10px",
                padding: "5px",
                color: "#fff"
            }} onClick={() => {
                props.todoSil(id)
            }}> Sil</span>
        </div>
    );
}

export default Todo;
