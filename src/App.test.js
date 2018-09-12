import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //decided to leave the App outside of the components folder. Makes sense to me. RC

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

