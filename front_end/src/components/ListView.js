import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/functions';
import { Link } from 'react-router-dom';
import { useNavbarContext } from '../context/navbar_context';

const ListView = ({ products }) => {
  const { changePage } = useNavbarContext();

  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link
                to={`/products/${id}`}
                className="btn-link"
                onClick={() => changePage('notLink')}
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  p {
    max-width: 45rem;
    margin-bottom: 1rem;
  }

  .btn-link {
    font-size: 0.6rem;
    padding: 0.3rem 0.6rem;
  }

  @media (min-width: 990px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }

    img {
      width: 300px;
    }
  }
`;

export default ListView;
