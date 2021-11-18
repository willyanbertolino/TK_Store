import React from 'react';
import styled from 'styled-components';
import { useWishContext } from '../context/wish_context';
import { Link } from 'react-router-dom';
import { WishContent } from '../components';
import { useNavbarContext } from '../context/navbar_context';

const Wish = () => {
  const { changePage } = useNavbarContext();
  const { wish } = useWishContext();

  if (wish.length < 1) {
    return (
      <Wrapper className="page-height">
        <div className="empty">
          <h2>You didn't wish any product yet</h2>
          <Link
            to="/products"
            className="btn-link"
            onClick={() => changePage('products')}
          >
            take a look
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <WishContent />
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

export default Wish;
