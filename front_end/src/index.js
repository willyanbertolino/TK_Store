import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavbarProvider } from './context/navbar_context';
import { FilterProvider } from './context/filter_context';
import { ProductsProvider } from './context/products_context';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
