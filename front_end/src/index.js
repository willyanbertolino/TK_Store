import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavbarProvider } from './context/navbar_context';
import { FilterProvider } from './context/filter_context';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';
import { WishProvider } from './context/wish_context';
import { UserProvider } from './context/user_context';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <NavbarProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <WishProvider>
                <App />
              </WishProvider>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </NavbarProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
