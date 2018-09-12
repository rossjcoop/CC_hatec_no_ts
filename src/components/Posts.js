import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Posts extends Component {
    render() {
        return (
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
        )
    }
};

function mapStateToProps(appState) {
    return {
        data: appState.data
    }
};

export default connect(mapStateToProps)(Posts);