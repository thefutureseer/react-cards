import React from 'react';
import ReactDOM from 'react-dom';
// import './css/index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//Card component
import Card from "./components/cards";

//Import bootstrap file from node modules
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
