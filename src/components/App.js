import React, { Component } from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux';
import store from '../store';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Switch>
              <Route path="/posts/:postId" component={Post} />
              <Route path="/posts" component={Posts} />
              <Route exact path ="/" component={Home} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
