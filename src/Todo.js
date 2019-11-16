import React from 'react';

function Todo(props) {
    const {content} = props;
    return (
        <div>
            {content}
        </div>
    );
}

export default Todo;
