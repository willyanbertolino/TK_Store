import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/functions';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavbarContext } from '../context/navbar_context';

const Product = ({ image, name, price, id }) => {
  const { changePage } = useNavbarContext();

  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link
          to={`/products/${id}`}
          className="link"
          onClick={() => changePage('notLink')}
        >
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-primary-1);
    border-radius: var(--radius);
  }

  img {
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;

    & svg {
      font-size: 1.3rem;
      color: var(--clr-white);
    }
  }

  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: 400;

    & h5,
    p {
      margin-bottom: 0;
    }

    & p {
      color: var(--clr-primary-5);
    }
  }
`;

export default Product;
