import React from 'react';
import styled from 'styled-components';
import { useWishContext } from '../context/wish_context';
import { Link } from 'react-router-dom';
import WishCartColumns from './WishCartColumns';
import WishItem from './WishItem';
import { useNavbarContext } from '../context/navbar_context';

const WishContent = () => {
  const { wish, clearWish } = useWishContext();
  const { changePage } = useNavbarContext();

  return (
    <Wrapper className="section-center page">
      <WishCartColumns sign={'wish'} />
      {wish.map((item) => {
        return <WishItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link
          to="/products"
          onClick={() => changePage('products')}
          className="btn-link"
        >
          continue shopiing
        </Link>
        <button
          type="button"
          onClick={clearWish}
          className="btn-link
     clear-btn"
        >
          clear wish list
        </button>
      </div>
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

export default WishContent;
