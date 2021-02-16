import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

//localStorage.setItem('dataUsername', 'Admin')
//localStorage.setItem('dataPassword', '12345')

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
