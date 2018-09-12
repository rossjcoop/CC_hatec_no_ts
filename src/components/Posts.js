import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';


class Posts extends Component {
    render() {
        return (
            <Card.Group>
                <div className="posts">
                    {this.props.data.posts.map(item => (
                        <div key={item.id} className="postCard">
                            <Link className="link" to={"/posts/" + item.id}>               
                                <Card id="card" fluid color="teal">
                                    <div className="post">
                                        <h2>{item.title}</h2>
                                        <p>{item.body}</p>
                                    </div>
                                </Card> 
                            </Link>
                            <br />                         
                        </div>                       
                    ))}
                </div>
            </Card.Group>
        )
    }
};

function mapStateToProps(appState) {
    return {
        data: appState.data
    }
};

export default connect(mapStateToProps)(Posts);