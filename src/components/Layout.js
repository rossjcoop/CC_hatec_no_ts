import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Input, Menu, Divider, Button } from 'semantic-ui-react';
import beans from '../images/spillyourbeans.jpg';

class Layout extends Component {
    state = { activeItem: 'Top 100' }  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div className="container">
                <div className="header">
                    <img src={beans} alt="spillthebeans" id="beans" />
                    <h3>A place to spill and chill.</h3>
                </div>
                <Input fluid icon='search' placeholder='Search...' />
                <Menu tabular>
                        <Menu.Item as={Link} to="/" name='Top 100' active={activeItem === 'Top 100'} onClick={this.handleItemClick} />
                        <Menu.Item as={Link} to="/" name='Complaints' active={activeItem === 'Complaints'} onClick={this.handleItemClick} />
                        <Menu.Item as={Link} to="/" name='Confessions' active={activeItem === 'Confessions'} onClick={this.handleItemClick} />
                        <Menu.Item as={Link} to="/" name='News' active={activeItem === 'News'} onClick={this.handleItemClick} />
                        <Menu.Item as={Link} to="/" name='Gossip' active={activeItem === 'Gossip'} onClick={this.handleItemClick} />
                </Menu>
                
                    {this.props.children}
                <Divider />
                <div className="footer">
                    <div>
                        <Button circular color='facebook' icon='facebook' />
                        <Button circular color='twitter' icon='twitter' />
                        <Button circular color='linkedin' icon='linkedin' />
                        <Button circular color='google plus' icon='google plus' />
                     </div>
                     <br />
                     <span>© 2018 Beans</span>
                </div>
            </div>
        )
    }
};




export default withRouter(Layout);