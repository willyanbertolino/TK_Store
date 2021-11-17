import React from 'react';
import styled from 'styled-components';
import { useNavbarContext } from '../context/navbar_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/functions';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const { changePage } = useNavbarContext();
  const { total_amount, shipping_fee } = useCartContext();
  const user = true;

  return (
    <Wrapper>
      <article>
        <h5>
          subtotal: <span>{formatPrice(total_amount)}</span>
        </h5>
        <p>
          shipping fee: <span>{formatPrice(shipping_fee)}</span>
        </p>
        <hr />
        <h4>
          order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>
      {user ? (
        <Link
          to="/checkout"
          className="btn-link btn"
          onClick={() => changePage('checkout')}
        >
          proceed to checkout
        </Link>
      ) : (
        <Link
          to="/login"
          className="btn-link btn"
          onClick={() => changePage('login')}
        >
          login
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  place-items: center;

  article {
    border: 1px solid var(--clr-grey-10);
    border-radius: var(--radius);
    width: 300px;
    padding: 0.5rem;
  }

  h4,
  h5,
  p {
    font-size: 1rem;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 180px 1fr;
  }

  h4 {
    margin-top: 1rem;
  }

  .btn {
    width: 300px;
    height: 3rem;
    margin-top: 1rem;
    align-self: center;
    text-align: center;
  }
`;

export default CartTotal;
