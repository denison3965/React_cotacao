import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Grafico from './components/grafico'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Grafico></Grafico>
  </React.StrictMode>,
  document.getElementById('root')
);

