import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useNavbarContext } from '../context/navbar_context';
import { Link } from 'react-router-dom';
import Payment from '../components/Payment';

const Checkout = () => {
  const { changePage } = useNavbarContext();
  const { cart } = useCartContext();

  return (
    <Wrapper>
      {cart.length < 1 ? (
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link
            o="/products"
            className="btn-link"
            onClick={() => changePage('products')}
          >
            fill it
          </Link>
        </div>
      ) : (
        <Payment />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .empty {
    text-align: center;
  }
`;

export default Checkout;
