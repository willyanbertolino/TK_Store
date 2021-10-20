import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavbarProvider } from './context/navbar_context';

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
