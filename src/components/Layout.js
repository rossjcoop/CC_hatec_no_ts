import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom"

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Pork and Beans</h1>
                    <h3>Post about anything, comment on anything.</h3>
                </div>
                    {this.props.children}
                <div className="footer">
                    Copywrite 2018 Pork and Beans
                </div>
            </div>
        )
    }
}




export default withRouter(Layout)