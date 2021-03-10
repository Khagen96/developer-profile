import React from 'react';
// import HeroImage from './Components/hero'
// import SearchBox from './Components/search_box'
// import Footer from './Components/footer'
// import Modal from './Components/modal'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = event => {
        this.setState({ value: event.target.value });
    }

    onClick = () => {
        window.location = `/developers/${this.state.value}`;
    }

    render() {
        return (
            <div>
                <label>Enter developer id: </label><input onChange={this.onChange} value={this.state.value} />
                <button onClick={this.onClick}>Submit</button>
            </div>
        );
    }
}

export default HomePage;