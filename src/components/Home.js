import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Posts from './Posts';
import { getAll } from '../actions/action';



class Home extends Component {

    componentWillMount() {
        getAll()
    }

    render() {
        return (
            <div>
                <Posts />
            </div>
        )
    }
}

export default Home;