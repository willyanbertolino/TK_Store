import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/functions';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>

          {/* category */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, i) => {
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={updateFilters}
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="group-categories">
            {/* company */}
            <div className="form-control">
              <h5>company</h5>
              <select
                name="company"
                value={company}
                onChange={updateFilters}
                className="company"
              >
                {companies.map((c, i) => {
                  return (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* colors */}
            <div className="form-control">
              <h5>colors</h5>
              <div className="colors">
                {colors.map((c, i) => {
                  if (c === 'all') {
                    return (
                      <button
                        key={i}
                        name="color"
                        onClick={updateFilters}
                        data-color="all"
                        className={`all-btn ${color === 'all' && 'active'}`}
                      >
                        all
                      </button>
                    );
                  }
                  return (
                    <button
                      key={i}
                      name="color"
                      style={{ background: c }}
                      className={`color-btn ${color === c && 'active'}`}
                      type="button"
                      data-color={c}
                      onClick={updateFilters}
                    >
                      {color === c ? <FaCheck /> : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="group-categories">
            {/* price */}
            <div className="form-control">
              <h5>price</h5>
              <p className="price">{formatPrice(price)}</p>
              <input
                type="range"
                name="price"
                onChange={updateFilters}
                min={min_price}
                max={max_price}
                value={price}
              />
            </div>

            {/* shipping */}
            <div className="form-control shipping">
              <label htmlFor="shipping"> free shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={shipping}
                onChange={updateFilters}
              />
            </div>
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    text-transform: capitalize;

    & h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    width: 100%;
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }

  .search-input:focus {
    outline: 1px solid var(--clr-grey-5);
  }

  .search-input::placeholder {
    text-transform: uppercase;
  }

  button {
    margin-right: 0.5rem;
    padding: 0 0.3rem;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .group-categories {
    display: flex;
    justify-content: space-between;
    /* margin-right: 2rem; */
  }

  .company {
    background: var(--clr-grey-11);
    outline: none;
    padding: 0.3rem;
    border: 1px solid transparent;
  }

  .colors {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--clr-grey-1);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .all-btn:hover,
  .color-btn:hover {
    opacity: 1;
  }

  .active {
    opacity: 1;
  }

  .all-btn .active {
    text-decoration: underline;
  }

  .price {
    margin-bottom: 0.3rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    margin-right: 0.6rem;
  }

  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.3rem 0.6rem;
    border-radius: var(--radius);
    opacity: 0.7;
    transition: var(--transition);
  }

  .clear-btn:hover {
    opacity: 1;
  }

  @media (min-width: 750px) {
    button {
      margin: 0.3rem 0;
      display: block;
    }

    .content {
      position: sticky;
      top: 1rem;
    }

    .group-categories {
      display: block;
    }
  }
`;

export default Filters;
