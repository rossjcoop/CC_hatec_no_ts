import React, { Component } from 'react';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';



class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>      
            <Layout>
              <Switch>
                <Route exact path ="/" component={Home} />  
                <Route path="/posts" component={Posts} />
                <Route path="/posts/:postId" component={Post} />
              </Switch>
            </Layout>
         </Router> 
       </Provider> 
    )
  }
}

export default App;