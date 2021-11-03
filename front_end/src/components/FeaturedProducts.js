import { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useWindowSize } from '../custom_hook/window_size';
import { useNavbarContext } from '../context/navbar_context';
import { checkNumber, formatPrice, sliderClassCss } from '../utils/functions';

import { useProductsContext } from '../context/products_context';

const FeaturedProducts = () => {
  const { changePage } = useNavbarContext();
  const { featured_products: products } = useProductsContext();
  const width = useWindowSize();

  const [index, setIndex] = useState(0);
  const [num, setNum] = useState(1);

  // reset index
  useEffect(() => {
    setIndex(0);
  }, [num]);

  // display products controled by screen size
  useEffect(() => {
    if (width <= 720) setNum(1);
    if (width > 720 && width <= 990) setNum(2);
    if (width > 990) setNum(3);
  }, [width]);

  // slide control
  useEffect(() => {
    let slider = setInterval(() => {
      nextProduct();
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [num, index]);

  // preview products
  const prevProduct = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(num, newIndex, products.length - 1);
    });
  };

  // next products
  const nextProduct = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // let newIndex = index + num;
      return checkNumber(num, newIndex, products.length - 1);
    });
  };

  return (
    <Wrapper className="section-center">
      <h2 className="title">featured products</h2>

      <div className="container">
        {products.map((product, productIndex) => {
          const { id, image, name, price } = product;

          return (
            <article
              key={id}
              className={`card ${sliderClassCss(
                num,
                productIndex,
                index,
                products.length - 1
              )}`}
            >
              <img src={image} alt={name} />
              <div className="info">
                <h4>{name}</h4>
                <p>{formatPrice(price)}</p>
              </div>
            </article>
          );
        })}

        <div className="button-container">
          <button className="prev-btn" onClick={prevProduct}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextProduct}>
            <FaChevronRight />
          </button>
        </div>
        <Link
          to="/products"
          onClick={() => changePage('products')}
          className="btn-link all-products"
        >
          all products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;

  .container {
    position: relative;
    height: calc(100% - 7rem);
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .title {
    text-transform: capitalize;
    color: var(--clr-primary-2);
    margin: 2rem 0;
  }

  .info {
    display: grid;
    grid-template-columns: 4fr 1fr;
    padding-top: 1rem;
    align-items: center;

    & h4 {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    & p {
      margin-bottom: 0;
      text-align: right;
    }
  }

  .button-container {
    position: absolute;
    width: 85vw;
    top: 33%;
    display: flex;
    justify-content: space-between;
  }

  .prev-btn,
  .next-btn {
    width: 25px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
    border: transparent;
    transition: var(--transition);
  }

  .prev-btn:hover,
  .next-btn:hover {
    opacity: 1;
  }

  .prev-btn {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .next-btn svg {
    position: absolute;
    right: 0;
  }

  .next-btn {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    opacity: 0;
    transition: var(--transition);
  }

  img {
    height: 90%;
    object-fit: cover;
  }

  .activeSlide {
    opacity: 1;
  }

  .active {
    transform: translateX(0);
  }

  .lastSlide {
    transform: translateX(-100%);
  }

  .nextSlide {
    right: 0;
    transform: translateX(100%);
  }

  .all-products {
    max-width: 300px;
    text-align: center;
  }

  @media (min-width: 720px) {
    .active1 {
      width: 47.5%;
    }
    .active2 {
      width: 47.5%;
      transform: translateX(110.3%);
    }
  }

  @media (min-width: 990px) {
    .active1 {
      width: 32%;
    }
    .active2 {
      width: 32%;
      transform: translateX(106.3%);
    }
    .active3 {
      width: 32%;
      transform: translateX(212.6%);
    }
  }
`;

export default FeaturedProducts;
