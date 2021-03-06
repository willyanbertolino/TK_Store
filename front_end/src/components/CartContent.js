import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import WishCartColumns from './WishCartColumns';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { useNavbarContext } from '../context/navbar_context';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const { changePage } = useNavbarContext();

  return (
    <Wrapper className="section-center">
      <WishCartColumns sign={'cart'} />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link
          to="/products"
          onClick={() => changePage('products')}
          className="btn-link"
        >
          continue shopping
        </Link>
        <button
          type="button"
          onClick={clearCart}
          className="btn-link
     clear-btn"
        >
          clear shopping bag
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .clear-btn {
    border-color: transparent;
    cursor: pointer;
  }
`;

export default CartContent;
