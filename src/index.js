import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Characters from './components/Characters';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Characters />
  </Provider>,
  document.getElementById('root')
);
