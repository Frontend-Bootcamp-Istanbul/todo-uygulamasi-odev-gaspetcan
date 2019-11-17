import React from 'react';

function Todo(props) {
    const {content, id} = props;
    return (
        <div style={{
            margin: "10px"
        }}>
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
