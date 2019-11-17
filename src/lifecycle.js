import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        // Component mount olduktan(oluştuktan sonra) çalışır.
        // Data almak için kullanılır.
        // Componente eventler bağlamak için kullanılır.
    }

    componentDidUpdate(){
        // Update gerçekleşir gerçekleşmez çalışır.
        //  değişen prop ile api istekleri atmak için kullanılabilir.
    }

    componentWillUnmount() {
        // Sayfadan kalkmadan hemen ömce calışır.
        // Bind edilen eventleri kaldırmak için kullanılabilir.
    }

    render(){
        return <div>
            APP
        </div>
    }
}

export default App;
