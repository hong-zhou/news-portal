import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d427684eb77e4e0b9333c65a118d5fd3`;

        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItem() {
        return this.state.sidenews.map((item) => (
            <SingleSide key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <div >
                {this.renderItem()}
            </div>
        );
    }
}

export default Sidenews;