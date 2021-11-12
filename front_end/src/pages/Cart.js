import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent } from '../components';
import { useNavbarContext } from '../context/navbar_context';

const Cart = () => {
  const { changePage } = useNavbarContext();
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="page-height">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link
            to="/products"
            className="btn-link"
            onClick={() => changePage('products')}
          >
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    padding-top: 7rem;

    h2 {
      margin-bottom: 3rem;
      text-transform: capitalize;
    }
  }
`;
export default Cart;
