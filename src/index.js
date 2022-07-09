import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Resume from './resume';
import App from './App';
import reportWebVitals from './reportWebVitals'
// const routing=(
 
// );
// ReactDOM.createPortal(routing,document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();