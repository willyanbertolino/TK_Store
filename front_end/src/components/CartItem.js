import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/functions';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div className="name">
          <h5>{name}</h5>
          <p className="color">
            color: <span style={{ background: color }} />
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 160px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  place-items: center;
  margin-bottom: 3rem;

  .subtotal {
    display: none;
  }

  .price {
    display: none;
  }

  .title {
    display: grid;
    grid-template-rows: 60px;
    grid-template-columns: 60px 100px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  img {
    height: 100%;
    border-radius: var(--radius);
    object-fit: cover;
  }

  h5 {
    font-size: 0.8rem;
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-8);
    font-size: 0.8rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }

  .price-small {
    color: var(--clr-primary-3);
  }

  .remove-btn {
    color: var(--clr-white);
    background: var(--clr-red-dark);
    border: transparent;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr) auto;
    align-items: center;
    grid-template-rows: 75px;

    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-8);
      font-weight: 400;
      font-size: 1rem;
    }

    .price-small {
      display: none;
    }

    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-3);
      font-weight: 400;
    }

    .name {
      font-size: 0.9rem;
    }

    .color {
      font-size: 0.9rem;
      span {
        width: 0.8rem;
        height: 0.8rem;
      }
    }

    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
  }
`;

export default CartItem;
