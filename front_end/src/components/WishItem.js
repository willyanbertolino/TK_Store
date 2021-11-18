import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/functions';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { useWishContext } from '../context/wish_context';
import { useHistory } from 'react-router-dom';
import { useNavbarContext } from '../context/navbar_context';

const WishItem = ({ id, image, name, colors, price }) => {
  const { removeItem } = useWishContext();
  const history = useHistory();
  const { changePage } = useNavbarContext();

  const addWishToCart = (id) => {
    removeItem(id);
    history.push(`/products/${id}`);
    changePage('single_product');
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div className="name">
          <h5>{name}</h5>
          <div className="colors">
            {colors.map((color, index) => {
              return (
                <span
                  className="color-btn"
                  key={index}
                  style={{ background: color, width: '1rem', height: '1rem' }}
                ></span>
              );
            })}
          </div>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>

      <button
        className="wish-remove-btn add-wish-to-cart-btn"
        onClick={() => addWishToCart(id)}
      >
        <FaShoppingBag />
      </button>
      <button
        className="wish-remove-btn remove-btn"
        onClick={() => removeItem(id)}
      >
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

  .colors {
    display: flex;
    margin: 0.5rem 0;
  }

  .price-small {
    color: var(--clr-primary-3);
  }

  .wish-remove-btn {
    color: var(--clr-white);
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

  .add-wish-to-cart-btn {
    background: var(--clr-green-dark);
  }

  .remove-btn {
    background: var(--clr-red-dark);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr) auto;
    align-items: center;
    grid-template-rows: 75px;

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

export default WishItem;
