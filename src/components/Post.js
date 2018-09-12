import React, { Component } from 'react';
import { selectPost } from '../actions/action';
import { connect } from 'react-redux';
import { Container, Comment, Header, Divider, Form, Button } from 'semantic-ui-react';
import placeholder from '../images/placeholder.jpg';


class Post extends Component {

    componentWillMount() {
        selectPost(this.props.match.params.postId)
    }

    render() {
        return (
            <div className="post">
                <Container fluid>
                    <Header as='h2'>{this.props.data.post.title}</Header>
                    <p>
                        {this.props.data.post.body}
                    </p>
                </Container>
                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
                <Divider />
                <Comment.Group size='large'>
                    <div className="comments">
                        {this.props.data.comments.map(item => (
                            <div key={item.id} className="postCard">
                                {/* <h3>{item.body}</h3>
                                <h5>Commented by: {item.name}</h5> */}
                                <Comment>
                                    <Comment.Avatar as='a' src={placeholder} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{item.name}</Comment.Author>
                                        <Comment.Metadata>
                                            <span>Today at 5:42PM</span>
                                        </Comment.Metadata>
                                        <Comment.Text>{item.body}</Comment.Text>
                                        <Comment.Actions>
                                            <a>Reply</a>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </div>
                        ))}
                    </div>
                </Comment.Group>
            </div>
        )
    }
};



function mapStateToProps(appState) {
    return {
        data: appState.viewpost
    }
};

export default connect(mapStateToProps)(Post);