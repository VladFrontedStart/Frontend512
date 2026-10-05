import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ show: false }), 2000);
    }

    render() {
        return <main>{this.state.show && <h1>Hello</h1>}</main>;
    }
}

export default Main;