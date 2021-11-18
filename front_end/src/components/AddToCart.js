import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { useWishContext } from '../context/wish_context';
import { useNavbarContext } from '../context/navbar_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { changePage } = useNavbarContext();
  const { addToCart } = useCartContext();
  const { addToWish, wish } = useWishContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const disableWishBtn = (id, wish) => {
    let disabled = false;
    const tempItem = wish.find((item) => item.id === id);
    if (tempItem) {
      disabled = true;
    }
    return disabled;
  };

  const handleClick = (id, mainColor, amount, product) => {
    addToCart(id, mainColor, amount, product);
    changePage('products');
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
      </div>
      <div className="btns">
        <button
          type="button"
          className="btn-link wish-btn"
          disabled={disableWishBtn(id, wish)}
          onClick={() => addToWish(id, product)}
        >
          {disableWishBtn(id, wish) ? 'added to wish' : 'add to wish'}
        </button>
        <Link
          to="/cart"
          className="btn-link"
          onClick={() => handleClick(id, mainColor, amount, product)}
        >
          add to bag
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  display: grid;
  place-items: center;

  .colors {
    display: grid;
    grid-template-columns: 125px, 1fr;
    align-items: center;

    span {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .color-btn svg {
    font-size: 0.8rem;
    color: var(--clr-white);
  }

  .btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }

  .wish-btn {
    cursor: pointer;
    border: transparent;
  }

  .wish-btn:disabled {
    background: var(--clr-grey-8);
    color: var(--clr-primary-1);
    cursor: auto;
  }

  .active {
    opacity: 1;
  }

  .btn-container {
    margin: 1.5rem 0 2rem 0;
  }
`;

export default AddToCart;
