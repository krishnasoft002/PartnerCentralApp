
import React ,{useState}from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store.js'
import './index.css';







    
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
