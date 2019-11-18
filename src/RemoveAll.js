import React from 'react';


class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => {this.props.onRemoveAll()}}>
                Tümünü Sil
        </button>
    }
}

export default RemoveAll;
