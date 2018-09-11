import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Pork and Beans</h1>
                    <h3>Post about anything, comment on anything.</h3>
                </div>
                <div className="posts">
                    {this.props.data.posts.map(item => (
                        <div key={item.id} className="postCard">
                            <Link to={"/posts/" + item.id}>
                                <div className="post">
                                    <h2>{item.title}</h2>
                                    <p>{item.body}</p>
                                </div>
                            </Link>
                        </div>                       
                    ))}
                </div>
            </div>
        )
    }
}