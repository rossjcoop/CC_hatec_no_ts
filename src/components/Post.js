import React, { Component } from 'react';
import { selectPost } from '../actions/action';
import { connect } from 'react-redux';


class Post extends Component {

    componentWillMount() {
        selectPost(this.props.match.params.postId)
    }

    render() {
        return (
            <div className="post">
                <div className="headline">
                    <h1>{this.props.data.post.title}</h1>
                    <h3>{this.props.data.post.body}</h3>
                </div>
                <div className="comments">
                    {this.props.data.comments.map(item => (
                        <div key={item.id} className="postCard">
                            <h3>{item.body}</h3>
                            <h5>Commented by: {item.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



function mapStateToProps(appState) {
    console.log(appState)
    return {
        data: appState.viewpost
    }
}

export default connect(mapStateToProps)(Post);