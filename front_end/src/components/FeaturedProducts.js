import { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useWindowSize } from '../custom_hook/window_size';
import { useNavbarContext } from '../context/navbar_context';
import { checkNumber, formatPrice, sliderClassCss } from '../utils/functions';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';

let featuredProducts = [
  { id: 1, mainImg: product1, name: 'Product1', price: 23.5 },
  { id: 2, mainImg: product2, name: 'Product2', price: 50.46 },
  { id: 3, mainImg: product1, name: 'Product3', price: 34.7 },
  { id: 4, mainImg: product2, name: 'Product4', price: 145.7 },
  { id: 5, mainImg: product1, name: 'Product5', price: 187.5 },
  { id: 6, mainImg: product2, name: 'Product6', price: 245.7 },
  { id: 7, mainImg: product1, name: 'Product7', price: 590.9 },
  { id: 8, mainImg: product2, name: 'Product8', price: 1099.99 },
  { id: 9, mainImg: product1, name: 'Product9', price: 2599.99 },
  { id: 10, mainImg: product1, name: 'Product10', price: 2799.99 },
];

const FeaturedProducts = () => {
  const { changePage } = useNavbarContext();
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
      return checkNumber(num, newIndex, featuredProducts.length - 1);
    });
  };

  // next products
  const nextProduct = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // let newIndex = index + num;
      return checkNumber(num, newIndex, featuredProducts.length - 1);
    });
  };

  return (
    <Wrapper className="section-center">
      <h2 className="title">featured products</h2>

      <div className="container">
        {featuredProducts.map((product, productIndex) => {
          const { id, mainImg: img, name, price } = product;

          return (
            <article
              key={productIndex}
              className={`card ${sliderClassCss(
                num,
                productIndex,
                index,
                featuredProducts.length - 1
              )}`}
            >
              <img src={img} alt={name} />
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

    & p {
      text-align: right;
    }
  }

  .button-container {
    position: absolute;
    width: 85vw;
    top: 200px;
    transform: translateY(-50%);
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
    position: absolute;
    top: 28rem;
    left: 50%;
    transform: translateX(-50%);
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
