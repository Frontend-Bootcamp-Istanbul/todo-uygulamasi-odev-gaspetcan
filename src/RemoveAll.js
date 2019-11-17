import React from 'react';


class RemoveAll extends React.Component {
    render() {
        return <button onClick={() => {
            this.props.onRemove();
        }
        }>Tümünü Sil</button>
    }
}

export default RemoveAll;
