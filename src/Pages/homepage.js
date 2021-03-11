import React from 'react';
import Hero from '../Components/Hero';
// import SearchBox from '../Components/search_box'
// import Footer from '../Components/footer'
// import Modal from '../Components/modal'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            developers: []
        }
    }
    componentDidMount() {
        fetch(`/api/developers/`)
        .then((response) => response.json())
        .then(response => {
            this.setState({ developers: response });
        });
    }

    render() {
        return (
            <div>
                <Hero />
                <div>Developers :{JSON.stringify(this.state.developers)}</div>

            </div>
        );
    }
}

export default HomePage;