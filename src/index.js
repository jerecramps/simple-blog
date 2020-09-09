import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import reduxThunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
,  document.getElementById('root')
)
