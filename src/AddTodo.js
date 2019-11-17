import React from 'react';


class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.ekle = this.ekle.bind(this);
    }

    onInputChange(e){
        const newVal = e.target.value;
        console.log(newVal);
        this.setState({
            inputVal: newVal
        });
    }

    ekle(event){
        event.preventDefault();
        this.props.onAdd(this.state.inputVal);
        this.setState({
            inputVal: ""
        });
    }

    render() {
        const {onAdd} = this.props;
        return <form
            onSubmit={this.ekle}>
            <input
                type="text"
                value={this.state.inputVal}
                onChange={this.onInputChange} />
            <button>Ekle</button>
        </form>
    }
}

export default AddTodo;
