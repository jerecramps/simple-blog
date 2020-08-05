import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import 'react-confirm-alert/src/react-confirm-alert.css'


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
,  document.getElementById('root')
)
